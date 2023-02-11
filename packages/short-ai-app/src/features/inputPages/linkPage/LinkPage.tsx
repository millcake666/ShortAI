import styled from '@emotion/styled'
import { Button, InputAdornment, TextField, Typography } from '@mui/material'
import React from 'react'

import { Spacer } from '../../primitives'
import { LinkMicroIcon } from '../icon/LinkMicroIcon'
import { InputPage } from '../inputBar/InputPage'

export const LinkPage = () => {
  return (
    <div>
      <InputPage page="url" />
      <Spacer space={20} />
    </div>
  )
}
