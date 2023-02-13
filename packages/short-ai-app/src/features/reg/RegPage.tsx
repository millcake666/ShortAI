import styled from '@emotion/styled'
import { Alert, AlertTitle, Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-grid-system'
import { Controller, FieldValues, FormProvider, useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { BREAKPOINTS } from '../../consts/common'
import { ROUTES } from '../../consts/routes'
import { useCreateUserUserPost } from '../api/generated/endpoints'
import { UserCreate } from '../api/generated/models'
import { useAuth } from '../auth/AuthProvider'
import { Error, Flex, Spacer } from '../primitives'
import { blue, grey } from '../themingAndStyling/theme'

export const RegPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { signin } = useAuth()
  const [formError, setFormError] = useState('')

  // reg mutation
  const { mutate } = useCreateUserUserPost({
    mutation: {
      onSuccess: (res: any) => {
        signin({
          access_token: res.data.access_token,
          data: {
            username: formValues.login,
            password: formValues.password,
            email: formValues.email
          },
          callback: () => navigate(ROUTES.HOME)
        })
      },
      onError: (error) => {
        const errorMgs = JSON.parse(error.request.responseText)
        // @ts-ignore
        setFormError(errorMgs?.errors[0] || '')
      }
    }
  })
  const methods = useForm()
  const { handleSubmit, formState, getValues, register, watch, trigger } = methods
  const { clearErrors } = methods

  const fromPage = location.state?.from?.pathname || '/'
  const errors = formState.errors
  const formValues = getValues()
  const password = watch('password')
  const password_confirmation = watch('password_confirmation')

  const onSubmit = (data: any) => {
    mutate({ data: { login: data.login, password: data.password, email: data.email } })
    return console.log(data)
  }

  useEffect(() => {
    if (formState.isDirty) {
      trigger('password_confirmation')
    }
  }, [password, trigger])

  useEffect(() => {
    if (formState.isDirty) {
      trigger('password')
    }
  }, [password_confirmation, trigger])

  return (
    <Flex flexDirection={'column'} alignItems={'center'}>
      <Flex width={480}>
        <FormProvider {...methods}>
          <Form
            onSubmit={handleSubmit(onSubmit)}
            onChange={(e) => {
              clearErrors()
            }}
            onBlur={(e) => {
              clearErrors()
            }}
          >
            <Flex justifyContent="center" alignItems="center">
              {formError && (
                <Alert variant="filled" severity="error">
                  {formError || 'Network error'}
                </Alert>
              )}
            </Flex>

            <Flex flexDirection="column" alignItems="center" justifyContent="center">
              <Spacer />

              <Flex justifyContent={'center'} alignItems={'center'}>
                <Button
                  onClick={() => {
                    navigate(ROUTES.LOGIN)
                  }}
                >
                  <Typography variant="h2" textAlign="center" color={grey[500]}>
                    Вход
                  </Typography>
                </Button>
                <Typography variant={'h2'} color={blue[500]}>
                  <u>Регистрация</u>
                </Typography>
              </Flex>
              <Spacer />

              <TextField
                {...register('login', { required: 'Fill out name' })}
                label="Логин"
                variant="outlined"
                fullWidth
                error={!!errors.login}
              />
              <Error name="login" />

              <TextField
                {...register('email', { required: 'Fill out email' })}
                label="E-mail"
                variant="outlined"
                fullWidth
                autoComplete="email"
                error={!!errors.email}
              />
              <Error name="email" />

              <TextField
                {...register('password', {
                  required: 'Fill out password',
                  validate: (value) =>
                    value === formValues.password_confirmation || 'The passwords do not match'
                })}
                error={!!errors.password}
                label="Пароль"
                variant="outlined"
                type="password"
                autoComplete="current-password"
                fullWidth
              />
              <Error name="password" />

              <TextField
                {...register('password_confirmation', {
                  required: 'Fill out password confirmation',
                  validate: (value) => value === formValues.password || 'The passwords do not match'
                })}
                error={!!errors.password_confirmation}
                label="Подтвердите пароль"
                variant="outlined"
                type="password"
                autoComplete="current-password"
                fullWidth
              />
              <Error name="password_confirmation" />
              <Spacer />

              <Button variant="contained" fullWidth size="medium" type="submit">
                Войти
              </Button>
              <Spacer />

              <Typography>
                У вас уже есть аккаунт?{' '}
                <RegW>
                  <Link to={ROUTES.LOGIN}>Войдите</Link>
                </RegW>
              </Typography>
              <Spacer />
            </Flex>
          </Form>
        </FormProvider>
      </Flex>
    </Flex>
  )
}

const RegW = styled.span`
  color: #1c40ff;
  &:hover {
    text-decoration: underline #1c40ff;
  }
`

const Form = styled.form`
  max-width: 880px;
  width: 100%;
  margin: 0 auto;
`
