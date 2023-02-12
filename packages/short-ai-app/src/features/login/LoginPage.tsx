/* eslint-disable no-constant-condition */
/* eslint-disable max-len */
import styled from '@emotion/styled'
import { Alert, Button, Checkbox, CircularProgress, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Controller, FieldValues, useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { ROUTES } from '../../consts/routes'
import { useAuth } from '../auth/AuthProvider'
import { Flex, Spacer } from '../primitives'
import { blue, grey } from '../themingAndStyling/theme'

export const LoginPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth()

  const methods = useForm({ reValidateMode: 'onSubmit' })
  const { handleSubmit, formState, getValues, register, clearErrors } = methods
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
            <Button variant="contained">На главную</Button>
          </Link>
        </Flex>
      ) : (
        <Flex flexDirection="column" alignItems="center" justifyContent="center">
          <Spacer />

          <Flex justifyContent={'center'} alignItems={'center'}>
            <Typography variant="h2" textAlign="center" color={blue[500]}>
              <u>Вход</u>
            </Typography>
            <Button
              onClick={() => {
                navigate(ROUTES.REG)
              }}
            >
              <Typography variant={'h2'} color={grey[500]}>
                Регистрация
              </Typography>
            </Button>
          </Flex>
          <Spacer space={10} />

          <Flex>
            {(errors.username || errors.password || auth.authError) && (
              <Alert variant="filled" severity="error">
                <div>{errors?.network?.message?.toString() || 'Неправильный логин или пароль'}</div>
              </Alert>
            )}
          </Flex>
          <Spacer space={10} />

          <TextField
            {...register('username', { required: 'Заполните логин' })}
            label="Логин"
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
          <Spacer space={5} />

          <UnderHover>
            <a
            // onClick={() => {
            //   navigate(ROUTES.FORGOT)
            // }}
            >
              Забыли пароль?
            </a>
          </UnderHover>
          <Spacer space={20} />

          <Button
            variant="contained"
            fullWidth
            size="medium"
            type="submit"
            onClick={() => clearErrors()}
          >
            Войти
          </Button>
          <Spacer />
          <Typography>
            У вас нет аккаунта?{' '}
            <RegW>
              <a
                onClick={() => {
                  navigate(ROUTES.REG)
                }}
              >
                Зарегистрируйтесь
              </a>
            </RegW>
          </Typography>
        </Flex>
      )}
    </Form>
  )
}

const RegW = styled.span`
  color: #1c40ff;
  &:hover {
    text-decoration: underline #1c40ff;
  }
`

const UnderHover = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  &:hover {
    text-decoration: underline black;
  }
`

const Form = styled.form`
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
`
