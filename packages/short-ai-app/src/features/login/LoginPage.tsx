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

          <Spacer space={30} />
          {false ? (
            <CircularProgress />
          ) : (
            <>
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
                {(errors.username || errors.password || auth.authError) && (
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
