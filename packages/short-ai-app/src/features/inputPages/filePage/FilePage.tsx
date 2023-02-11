import React from 'react'
import { Button, InputAdornment, TextField, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { Flex, Pad, Spacer } from '../../primitives'
import { InputPage } from '../inputPage/InputPage'

export const FilePage = () => {
  return (
    <div>
      <InputPage page="file" />
      <Spacer space={40} />
    </div>
  )
}
