import styled from '@emotion/styled'
import { Button, InputAdornment, TextField, Typography } from '@mui/material'
import React from 'react'

import { Spacer } from '../../primitives'
import { LinkMicroIcon } from '../icon/LinkMicroIcon'
import { InputBar } from '../inputBar/InputBar'

export const LinkPage = () => {
  return (
    <div>
      <InputBar page="url" />
      <Spacer space={20} />
    </div>
  )
}
