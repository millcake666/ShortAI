import { Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '../../consts/routes'
import { UnderConstrPik } from '../illustrations/UnderConstrPik'
import { Flex, Spacer } from '../primitives'

export const UnderConstruction = () => {
  const navigate = useNavigate()

  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <Typography variant="h3" textAlign="center">
        <b>Страница в разработке</b>
      </Typography>
      <Spacer space={60} />
      <UnderConstrPik />
      <Spacer />
      <Button size="large" variant="contained" onClick={() => navigate(ROUTES.HOME)}>
        На домашнюю
      </Button>
    </Flex>
  )
}
