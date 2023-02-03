import { TextField } from '@mui/material'
import { createRef } from 'react'
import Dropzone from 'react-dropzone'

import { Spacer } from '../primitives'

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
              <TextField fullWidth multiline rows={4} defaultValue="" />
              <p>Drag drop some files here</p>
              <button type="button" onClick={openDialog}>
                Open File Dialog
              </button>
            </div>
            <aside>
              <h4>Files</h4>
              <ul>
                {acceptedFiles.map((file: any) => (
                  <li key={file.path}>
                    {file.path} - {file.size} bytes
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        )
      }}
    </Dropzone>
  )
}
