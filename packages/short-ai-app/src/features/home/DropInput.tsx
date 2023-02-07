import styled from '@emotion/styled'
import { Button, TextField, Typography } from '@mui/material'
import { createRef } from 'react'
import Dropzone from 'react-dropzone'

import { Pad, Spacer } from '../primitives'

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
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              <TextField
                fullWidth
                multiline
                rows={4}
                defaultValue=""
                placeholder="Начните писать или скопируйте сюда..."
              />
              <ButtonWrap>
                <Button variant="outlined">текст</Button>
                <Button variant="outlined">ссылку</Button>
                <Typography fontSize="24px">или</Typography>
                <Button variant="outlined" onClick={openDialog}>
                  документ
                </Button>
              </ButtonWrap>
            </div>
          </div>
        )
      }}
    </Dropzone>
  )
}

const ButtonWrap = styled.div`
  display: flex;
  column-gap: 7px;
  justify-content: end;
  padding-top: 14px;
`
