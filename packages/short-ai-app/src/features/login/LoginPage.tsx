/* eslint-disable no-constant-condition */
/* eslint-disable max-len */
import styled from '@emotion/styled'
import {
  Alert,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Paper,
  TextField,
  Typography
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Controller, FieldValues, useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { ROUTES } from '../../consts/routes'
import { useLoginForAccessTokenTokenPost } from '../api/generated/endpoints'
import { useAuth } from '../auth/AuthProvider'
import { Flex, Spacer } from '../primitives'

export const LoginPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth()

  const methods = useForm({ reValidateMode: 'onSubmit' })
  const { handleSubmit, setError, formState, getValues, register, control, clearErrors, trigger } =
    methods
  const formValues = getValues()
  const errors = formState.errors

  const from = location.state?.from?.pathname || '/'

  function onSubmit(data: any) {
    auth.signin({
      data: {
        username: data.username,
        password: data.password
      },
      callback: () => {
        navigate(from, { replace: true })
      }
    })
  }

  const fakeLoginHandler = () => {
    clearErrors()
    auth.signin(
      {
        access_token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5N2NlN2NkMi03YWFjLTRkMGMtOWJiNi05NDhhZmYxZmY2MzAiLCJqdGkiOiJkY2Y0YzBlMzlkNzg5MGJkMzcyN2VkMTlkOWRmODViOGY4MmFiNWRiOGM5NTQ2MTUyZjJiM2JiYzU1OTc3NzhlMjVlZmQ4NjRhODA1ZmJhOSIsImlhdCI6MTY2OTEzMjY5NS4xNjU0NjQsIm5iZiI6MTY2OTEzMjY5NS4xNjU0NjksImV4cCI6MTY4NDc3MTA5NS4xNjAyNTksInN1YiI6IjIiLCJzY29wZXMiOltdfQ.zIzV2a6g1iDZnS6xtFOWQ9Q6XL2rRZkl9WAsnh3NGif1VVT3gzXECXu9yi7knm9LHif8U1ZJXYefljPumrlFKuch-lGy0Kc_lWI6Okhph2tQ5EPaZhXopMBzgoJknSPYhY48UyieCMqmx-5anfGWRd9B3SF-Urr9Z59XR1g1dLKiawObEpFAAblXxpM88bo7u_siAJtN66ihx3GcLbLFUBIuFQhB8h1Rsz1C6jtN7-2oTChQL5N8kJoB-Jp8vRlV7LCXKBXgiMIP5gs-qtzVZKf2vNHjBrcXsNRKzpz8LeL0UepWCzxHXgUEYZ2Motb_w8UAxuTgOuV_GzGcxBUF_KHxxd3NMd_yivlG144G7RKcIoMpWYfpY1bGOZfGJSNdvLF4hkEPn5NTU42Yuk6cYC-6iFyQ6Td9n_wagGlEYVVBYvzWn2VguraHBmcvbY0z_7du1E4jG2V1PDioE8fGY_gFmPu1nnh7Vd2AkRbXRFnR-ErCr189pFv_s51W3UFAcewGMFzDirflmxGHMexyHKTzUp7nFiSOYhu34CyM2TEuIIznqxoU5hmHkzQOfMe8_NM1odZlnNm65vBMq-uiF4QnyN_fci-hU4NdkSNjhLTH_tN54ljm9TdsHG1RAz2g1670ffs885_D3xJK49GP5B1vjsGASae-_YKUIc0HGFI',
        rememberMe: true,
        user: {
          email: 'jdoe@fakemail.com',
          username: 'John',
          user_position_id: 4,
          factory_id: 2
        }
      },
      () => {
        navigate(from, { replace: true })
      }
    )
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      onChange={(e) => {
        clearErrors()
      }}
      onBlur={(e) => {
        clearErrors()
      }}
    >
      {auth.access_token ? (
        <Flex flexDirection="column">
          <Typography variant="h3">
            <b>Вы уже вошли</b>
          </Typography>
          <Spacer />
          <Link to={ROUTES.HOME}>
            <Button variant="contained">HOME</Button>
          </Link>
        </Flex>
      ) : (
        <Flex flexDirection="column" alignItems="center" justifyContent="center">
          <Spacer />
          <Typography variant="h2" textAlign="center">
            <b>Вход</b>
          </Typography>
          <Spacer />

          <TextField
            {...register('username', { required: 'Заполните логин' })}
            label="E-mail"
            variant="outlined"
            fullWidth
            autoComplete="username"
            error={!!errors.username}
          />
          <Spacer />
          <TextField
            {...register('password', { required: 'Заполните пароль' })}
            label="Пароль"
            variant="outlined"
            type="password"
            autoComplete="current-password"
            fullWidth
            error={!!errors.username}
          />
          <Spacer space={4} />
          <Flex alignItems="center" justifyContent="space-between" width="100%">
            <Controller
              control={control}
              name="rememberMe"
              defaultValue={true}
              render={({ field: { onChange, onBlur, value } }) => (
                <FormControlLabel
                  label="Запомнить вход"
                  control={<Checkbox onBlur={onBlur} checked={value} onChange={onChange} />}
                />
              )}
            />
          </Flex>

          <Spacer space={20} />
          {false ? (
            <CircularProgress />
          ) : (
            <>
              {process.env.NODE_ENV === 'production' ? null : (
                <>
                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    type="button"
                    onClick={fakeLoginHandler}
                  >
                    FAKE LOGIN
                  </Button>
                  <Spacer />
                </>
              )}
              <Button
                variant="contained"
                fullWidth
                size="large"
                type="submit"
                onClick={() => clearErrors()}
              >
                Войти
              </Button>
              <Spacer />
              <Button
                variant="outlined"
                fullWidth
                size="large"
                onClick={() => navigate(ROUTES.REG)}
              >
                Регистрация
              </Button>
              <Spacer />
              <Flex>
                {(errors.username || errors.password || errors.network) && (
                  <Alert variant="filled" severity="error">
                    <div>
                      {errors?.network?.message?.toString() || 'Неправильный логин или пароль'}
                    </div>
                  </Alert>
                )}
              </Flex>
            </>
          )}
        </Flex>
      )}
    </Form>
  )
}

const Form = styled.form`
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
`
