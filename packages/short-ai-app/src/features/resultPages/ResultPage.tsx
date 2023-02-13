import styled from '@emotion/styled'
import { Alert, Button, Typography } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { Col, Row } from 'react-grid-system'
import { useLocation, useNavigate } from 'react-router-dom'

import { ROUTES } from '../../consts/routes'
import {
  useCreateTaskTasksPost,
  useGetTasksTasksGet,
  useGetTaskTasksTaskIdGet
} from '../api/generated/endpoints'
import { Result, TaskStatus } from '../api/generated/models'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { Flex, Spacer } from '../primitives'
import { blue } from '../themingAndStyling/theme'
import { FeedbackStars } from './FeedbackStars'
import { BackArrowIcon } from './icon/BackArrowIcon'
import { CopyIcon } from './icon/CopyIcon'
import { SaveIcon } from './icon/SaveIcon'
import { LoaderBanner } from './LoaderBanner'

export const ResultPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [temporary_idLS, setTemporaryIdLS] = useLocalStorage('temporary_id', '')

  const axiosHeaders = temporary_idLS ? { headers: { 'temporary-id': temporary_idLS } } : {}

  const { data, error, refetch } = useGetTaskTasksTaskIdGet(location?.state?.taskId, {
    query: { refetchInterval: 3000 },
    axios: axiosHeaders
  })
  const respText = data?.data.short_summary?.text
  const respStatus: TaskStatus | undefined = data?.data.status
  let text = ''
  if (respText !== undefined) {
    text = respText
  }

  useEffect(() => {
    console.log(data)
  }, [JSON.stringify(data)])

  return (
    <div>
      {error ? (
        <Flex flexDirection="column">
          <Alert severity="error">Ошибка обработки. Попробуйте зашортить снова</Alert>
          <Spacer />

          <Button
            variant="contained"
            onClick={() => {
              refetch()
            }}
          >
            Зашортить снова
          </Button>
          <Spacer />
          <Button variant="outlined" onClick={() => navigate(ROUTES.HOME)}>
            На главную
          </Button>
        </Flex>
      ) : respStatus != TaskStatus.completed ? (
        <LoaderBanner statusText={'Сокращаем текст'} />
      ) : (
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
      )}
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
