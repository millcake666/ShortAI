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
import { useAuth } from '../auth/AuthProvider'
import { Error, Flex, Spacer } from '../primitives'

export const RegPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [formError, setFormError] = useState('')
  // const { mutate } = useRegister({
  //   mutation: {
  //     onSuccess: () => {
  //       navigate(ROUTES.HOME)
  //     },
  //     onError: (error) => {
  //       const errorMgs = JSON.parse(error.request.responseText)
  //       // @ts-ignore
  //       setFormError(errorMgs?.errors[0] || '')
  //     }
  //   }
  // })
  const methods = useForm()
  const { handleSubmit, control, formState, getValues, register, watch, trigger } = methods

  const fromPage = location.state?.from?.pathname || '/'
  const errors = formState.errors
  const formValues = getValues()
  const password = watch('password')
  const password_confirmation = watch('password_confirmation')

  const onSubmit = (data: FieldValues) => {
    // const _data: RegisterBody = data
    // mutate({ data: _data })
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
          <b>Hi there! Let&apos;s register!</b>
        </Typography>
        <Spacer />

        <Row>
          <Col lg={6}>
            <TextField
              {...register('name', { required: 'Fill out name' })}
              label="Name"
              variant="outlined"
              fullWidth
              error={!!errors.name}
            />
            <Error name="name" />
          </Col>
          <Col lg={6}>
            <TextField
              {...register('surname', { required: 'Fill out surname' })}
              label="Surname"
              variant="outlined"
              fullWidth
              autoComplete="surname"
              error={!!errors?.surname}
            />
            <Error name="surname" />
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

        <Row>
          <Col md={6}>
            <Controller
              control={control}
              name="user_position_id"
              rules={{ required: 'Fill out user position' }}
              render={({ field: { onChange, value, name } }) => {
                return (
                  <FormControl fullWidth>
                    <InputLabel id="user_position_id-label">User Position</InputLabel>
                  </FormControl>
                )
              }}
            />
            <Error name="user_position_id" />
          </Col>
          <Col md={6}>
            <Controller
              control={control}
              name="factory_id"
              rules={{ required: 'Fill out factory' }}
              render={({ field: { onChange, value, name } }) => {
                return (
                  <FormControl fullWidth>
                    <InputLabel id="Factory-label">Factory</InputLabel>
                    <Select
                      value={value || ''}
                      onChange={onChange}
                      labelId="Factory-label"
                      label="Factory"
                      error={!!errors[name]}
                    >
                      <MenuItem>heheh</MenuItem>
                    </Select>
                  </FormControl>
                )
              }}
            />
            <Error name="factory_id" />
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
