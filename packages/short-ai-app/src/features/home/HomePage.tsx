import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import { Button, Chip, Paper, Stack, TextField, Tooltip, Typography } from '@mui/material'
import { useDropzone } from 'react-dropzone'
import { Col, Row } from 'react-grid-system'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '../../consts/routes'
import { Relative, Spacer, ZIndex } from '../primitives'
import { DropInput } from './DropInput'

export const HomePage = () => {
  const navigate = useNavigate()
  // const { getRootProps, getInputProps, acceptedFiles } = useDropzone({ noClick: false })

  return (
    <div>
      <Row>
        <Col>
          <DropInput />
        </Col>
      </Row>
    </div>
  )
}
