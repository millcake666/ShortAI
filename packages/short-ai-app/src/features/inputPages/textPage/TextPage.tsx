import styled from '@emotion/styled'
import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

import { useCreateTaskTasksPost } from '../../api/generated/endpoints'
import { Flex, Pad, Spacer } from '../../primitives'
import { InputBar } from '../inputBar/InputBar'

export const TextPage = () => {
  return (
    <div>
      <InputBar page="text" />
      <Spacer space={40} />
    </div>
  )
}
