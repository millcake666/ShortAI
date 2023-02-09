import styled from '@emotion/styled'
import {
  Alert,
  AlertTitle,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-grid-system'
import { Controller, FieldValues, FormProvider, useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { ROUTES } from '../../consts/routes'
import { useCreateUserUserPost } from '../api/generated/endpoints'
import { UserCreate } from '../api/generated/models'
import { useAuth } from '../auth/AuthProvider'
import { Error, Flex, Spacer } from '../primitives'

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
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Spacer />
        <Typography variant="h2" textAlign="center">
          <b>Регистрация</b>
        </Typography>
        <Spacer />

        <Row>
          <Col lg={12}>
            <TextField
              {...register('login', { required: 'Fill out name' })}
              label="Логин"
              variant="outlined"
              fullWidth
              error={!!errors.login}
            />
            <Error name="login" />
          </Col>
        </Row>

        <TextField
          {...register('email', { required: 'Fill out email' })}
          label="E-mail"
          variant="outlined"
          fullWidth
          autoComplete="email"
          error={!!errors.email}
        />
        <Error name="email" />

        <Row>
          <Col lg={6}>
            <div>
              <TextField
                {...register('password', {
                  required: 'Fill out password',
                  validate: (value) =>
                    value === formValues.password_confirmation || 'The passwords do not match'
                })}
                error={!!errors.password}
                label="Password"
                variant="outlined"
                type="password"
                autoComplete="current-password"
                fullWidth
              />
              <Error name="password" />
            </div>
          </Col>
          <Col lg={6}>
            <TextField
              {...register('password_confirmation', {
                required: 'Fill out password confirmation',
                validate: (value) => value === formValues.password || 'The passwords do not match'
              })}
              error={!!errors.password_confirmation}
              label="Password confirmation"
              variant="outlined"
              type="password"
              autoComplete="current-password"
              fullWidth
            />
            <Error name="password_confirmation" />
          </Col>
        </Row>

        <Spacer space={20} />

        <Button variant="contained" fullWidth size="large" type="submit">
          REGISTER
        </Button>

        <Spacer />

        <Button variant="outlined" fullWidth size="large" onClick={() => navigate(ROUTES.LOGIN)}>
          LOGIN
        </Button>

        <Spacer />

        <Flex justifyContent="center" alignItems="center">
          {formError && (
            <Alert variant="filled" severity="error">
              {formError || 'Network error'}
            </Alert>
          )}
        </Flex>
      </Form>
    </FormProvider>
  )
}

const Form = styled.form`
  max-width: 880px;
  width: 100%;
  margin: 0 auto;
`
