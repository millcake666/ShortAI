import React from 'react'
import { Button, TextField, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { Flex, Pad, Spacer } from '../../primitives'
import { InputBar } from '../inputBar/InputBar'
import { useCreateTaskTasksPost } from '../../api/generated/endpoints'

export const TextPage = () => {
  return (
    <div>
      <InputBar page="text" />
      <Spacer space={40} />
    </div>
  )
}
