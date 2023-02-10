/* eslint-disable no-constant-condition */
import FingerprintJS from '@fingerprintjs/fingerprintjs'
import CloseIcon from '@mui/icons-material/CloseRounded'
import { Typography } from '@mui/material'
import axios from 'axios'
import { jwtDecode, jwtVerify, resignJwt } from 'jwt-js-decode'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

import { API } from '../../consts/api'
import { ROUTES } from '../../consts/routes'
import { parseJwt } from '../../utils'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { Absolute, Flex, Pointer, Spacer } from '../primitives'

const fpPromise = FingerprintJS.load({
  monitoring: false
})

let fingerprint = ''
const temporaryId = Math.floor(Math.random() * 100000)

;(async () => {
  // Get the visitor identifier when you need it.
  const fp = await fpPromise
  const result = await fp.get()
  // @ts-ignore
  fingerprint = result.visitorId
})()

axios.defaults.baseURL = 'http://151.248.122.104:8000'

interface AuthContextType {
  user: {
    name: string
    surname: string
    user_position_id: number
    factory_id: number
    email: string
  }
  access_token: string | null
  isOnetimeAuth: boolean
  signin: (userData: any, callback?: VoidFunction) => void
  signout: (callback?: VoidFunction) => void
}

const AuthContext = React.createContext<AuthContextType>(null!)

// add request interceptors
let reqInterceptor: any = null
// add response interceptors
let resInterceptor: any = null

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // @ts-ignore
  const [_user, setUser] = useLocalStorage('user', '')
  const [access_token, setToken] = useLocalStorage('access_token', '')
  const [refresh_token, setRefreshToken] = useLocalStorage('refresh_token', '')
  const [fingerprintLS, setFingerprint] = useLocalStorage('fingerprint', fingerprint)

  const [isOnetimeAuth, setOnetimeAuth] = useState(false)
  const navigate = useNavigate()
  const user = typeof _user === 'string' && _user ? JSON.parse(_user) : _user

  const signout = (callback?: VoidFunction) => {
    setUser(null)
    setToken('')
    setRefreshToken('')
    setFingerprint('')
    navigate(ROUTES.LOGIN)
    callback?.()
  }

  const interceptorsInit = () => {
    const requestHeaders = (config: any) => {
      const access_token = localStorage.getItem('access_token')?.replaceAll('"', '')

      if (
        access_token &&
        config &&
        !('' + config?.url)?.includes('/token') &&
        !(('' + config?.url)?.includes('/user') && config?.method === 'post')
      ) {
        config.headers['Authorization'] = `${access_token}`
      }

      return config
    }

    const responseHeaders = (config: any) => {
      const access_token = localStorage.getItem('access_token')?.replaceAll('"', '')

      if (
        access_token &&
        config &&
        !('' + config?.url)?.includes('/token') &&
        !config?.url?.includes('/user')
      ) {
        config.headers['Authorization'] = `${access_token}`
      }
      return config
    }

    const errors = (error: any) => {
      if (error?.response?.status === 401) {
        signout()
      }

      const whatError =
        error?.response?.status === 401
          ? 'Auth error'
          : error?.response?.status === 404
          ? 'UI error'
          : error?.response?.status === 400
          ? 'Error'
          : error?.response?.status === 504
          ? 'Network error'
          : 'Posible service error'

      // if (!(error?.response?.status === 400) && !(error?.response?.status === 401)) {
      //   toast.error((t) => (
      //     <div>
      //       <Typography>
      //         <>{error?.response?.data?.errorCode}</>
      //       </Typography>
      //       <div>
      //         <Typography>
      //           <>{whatError}</>
      //         </Typography>
      //       </div>
      //       <div>
      //         <Typography variant="caption">Сервис: {error?.request?.responseURL?.replace('http://localhost:9999/', '')}</Typography>
      //       </div>
      //       <Flex>
      //         <Typography variant="caption">Статус:</Typography>
      //         <Spacer width={4} />
      //         <Typography variant="caption">{error?.response?.status}</Typography>
      //       </Flex>
      //       {error?.response?.data?.errorMessage && (
      //         <div>
      //           <Typography variant="caption">Сообщение: {error?.response?.data?.errorMessage}</Typography>
      //         </div>
      //       )}
      //       <Absolute right={2} top={2}>
      //         <Pointer onClick={() => toast.dismiss(t.id)}>
      //           <CloseIcon />
      //         </Pointer>
      //       </Absolute>
      //     </div>
      //   ))
      // }

      return Promise.reject(error)
    }

    return {
      request: (config: any) => (requestHeaders(config), config),
      errors: (config: any) => errors(config),
      response: (config: any) => (responseHeaders(config), config)
    }
  }

  const signin = async ({ data, rememberMe, callback }: any) => {
    const body = new URLSearchParams()
    body.append('username', data.username)
    body.append('password', data.password)

    const result = await axios({
      method: 'POST',
      url: '/token',
      headers: {
        'finger-print': fingerprint,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: body
    })
      .then((response) => {
        if (true) {
          setToken(response.data.access_token)
          setRefreshToken(response.data.refresh_token)
          setFingerprint(fingerprint)
        } else {
          setOnetimeAuth(true)
        }
        callback?.()
      })
      .catch((error: any) => {
        //
      })

    return result
  }

  const refresh = async () => {
    const result = await axios({
      method: 'POST',
      url: '/refresh',
      headers: {
        'finger-print': fingerprint,
        refresh_token: refresh_token,
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        setToken(response.data.access_token)
        setRefreshToken(response.data.refresh_token)
        setFingerprint(fingerprint)
      })
      .catch((error: any) => {
        //
      })

    return result
  }

  useEffect(() => {
    if (access_token && access_token !== 'null') {
      const tokenData = jwtDecode(access_token)
      const isExpired = Date.now() >= (tokenData?.payload?.exp || 1) * 1000

      if (isExpired) {
        refresh()
      }
    }

    // add request interceptors
    reqInterceptor = axios.interceptors.request.use(interceptorsInit().request)
    // add response interceptors
    resInterceptor = axios.interceptors.response.use(
      interceptorsInit().response,
      interceptorsInit().errors
    )

    return () => {
      // remove all intercepts when done
      axios.interceptors.request.eject(reqInterceptor)
      axios.interceptors.response.eject(resInterceptor)
    }
  }, [])

  const value = { user, signin, signout, access_token, refresh_token, isOnetimeAuth }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return React.useContext(AuthContext)
}

export function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth()
  const location = useLocation()

  if (!auth.access_token && !auth.isOnetimeAuth) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />
  }

  return children
}
