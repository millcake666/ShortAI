import React from 'react'
import { Button, InputAdornment, TextField, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { Flex, Pad, Spacer } from '../../primitives'
import { InputBar } from '../inputBar/InputBar'

export const FilePage = () => {
  return (
    <div>
      <InputBar page="file" />
      <Spacer space={40} />
    </div>
  )
}
