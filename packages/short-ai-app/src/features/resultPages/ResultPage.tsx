import { Button, Typography } from '@mui/material'
import {
  useCreateTaskTasksPost,
  useGetTasksTasksGet,
  useGetTaskTasksTaskIdGet
} from '../api/generated/endpoints'
import styled from '@emotion/styled'
import { Col, Row } from 'react-grid-system'
import { BackArrowIcon } from './icon/BackArrowIcon'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../consts/routes'
import { blue } from '../themingAndStyling/theme'
import { SaveIcon } from './icon/SaveIcon'
import { CopyIcon } from './icon/CopyIcon'
import { useEffect, useRef, useState } from 'react'
import { FeedbackStars } from './FeedbackStars'
import { Spacer } from '../primitives'
import { Result } from '../api/generated/models'

export const ResultPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { data } = useGetTaskTasksTaskIdGet(location.state.taskId)
  const resp_text = data?.data.short_summary?.text
  let text = ''
  if (resp_text !== undefined) {
    text = resp_text
  }

  return (
    <div>
      <Row style={{ justifyContent: 'space-between' }}>
        <Col md={12} lg={3}>
          <Button
            startIcon={<BackArrowIcon />}
            onClick={() => {
              navigate(ROUTES.HOME)
            }}
          >
            <Typography variant={'h4'} style={{ whiteSpace: 'nowrap' }}>
              Новый текст
            </Typography>
          </Button>
        </Col>
        <Col md={12} lg={3}>
          {/*<Button startIcon={<SaveIcon />}>Сохранить</Button>*/}
          <Button startIcon={<CopyIcon />} onClick={() => navigator.clipboard.writeText(text)}>
            <Typography variant={'h4'} color={blue[500]}>
              Скопировать
            </Typography>
          </Button>
        </Col>
      </Row>
      <ResultTextWrap>{text}</ResultTextWrap>
      <Spacer space={50} />
      <FeedbackStars />
    </div>
  )
}

const ResultTextWrap = styled.div`
  display: flex;
  padding: 20px;
  width: 100%;
  background-color: #fbfbff;

  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 24px;
`
function useIsomorphicLayoutEffect(arg0: () => void, arg1: (() => void)[]) {
  throw new Error('Function not implemented.')
}
