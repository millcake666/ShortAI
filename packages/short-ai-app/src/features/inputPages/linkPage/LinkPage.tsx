import styled from '@emotion/styled'
import { Button, InputAdornment, TextField, Typography } from '@mui/material'
import React from 'react'

import { Spacer } from '../../primitives'
import { LinkMicroIcon } from '../icon/LinkMicroIcon'
import { InputBar } from '../inputBar/InputBar'

export const LinkPage = () => {
  return (
    <div>
      {InputBar('link')}
      <Spacer space={20} />
      <TextField
        fullWidth
        multiline
        rows={2}
        defaultValue=""
        placeholder="Вставьте сюда ссылку"
        InputProps={{
          startAdornment: (
            <InputAdornment position={'start'}>
              <LinkMicroIcon />
            </InputAdornment>
          )
        }}
      />
    </div>
  )
}
