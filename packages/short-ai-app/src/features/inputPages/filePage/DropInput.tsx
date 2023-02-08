import styled from '@emotion/styled'
import {Button, InputAdornment, TextField, Typography} from '@mui/material'
import React, { createRef } from 'react'
import Dropzone from 'react-dropzone'

import { Pad, Spacer } from '../../primitives'
import {LinkMicroIcon} from "../icon/LinkMicroIcon";
import {UploadIcon} from "../icon/UploadIcon";
import {grey} from "@mui/material/colors";

export const DropInput = () => {
  const dropzoneRef: any = createRef()
  const openDialog = () => {
    if (dropzoneRef.current) {
      dropzoneRef.current.open()
    }
  }

  return (
    <Dropzone ref={dropzoneRef} noClick noKeyboard>
      {({ getRootProps, getInputProps, acceptedFiles }) => {
        return (
          <div className="container">
            <Wrap {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              <UploadIcon />
              <Typography variant={'h2'} color={grey[400]} textAlign={'center'}>Перетащите файл сюда или</Typography>
              <Button size={'small'}
                      variant={'outlined'}
                      onClick={openDialog}>
                <Typography variant={'body1'}>Выберите его</Typography>
              </Button>
            </Wrap>
          </div>
        )
      }}
    </Dropzone>
  )
}

const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  background-color: #FBFBFF;
  border: 1px solid #DCDCDE;
  border-radius: 25px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0 40px 0;
`

