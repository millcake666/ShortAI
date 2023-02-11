import { Button, Typography } from '@mui/material'
import {
  useCreateTaskTasksPost,
  useGetTasksTasksGet,
  useGetTaskTasksTaskIdGet
} from '../api/generated/endpoints'
import styled from '@emotion/styled'
import { Col, Row } from 'react-grid-system'
import { BackArrowIcon } from './icon/BackArrowIcon'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../consts/routes'
import { blue } from '../themingAndStyling/theme'
import { SaveIcon } from './icon/SaveIcon'
import { CopyIcon } from './icon/CopyIcon'

export const ResultPage = () => {
  const navigate = useNavigate()

  const { data, isLoading } = useGetTaskTasksTaskIdGet(678)
  console.log(data)

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
        <Col md={12} lg={6}>
          <Button startIcon={<SaveIcon />}>Сохранить</Button>
          <Button startIcon={<CopyIcon />}>
            <Typography variant={'h4'} color={blue[500]}>
              Скопировать
            </Typography>
          </Button>
        </Col>
      </Row>
      <ResultTextWrap>
        Тут будет текст который мы принимаем с бека уже сжатый и обработанный по красоте Тут будет
        текст который мы принимаем с бека уже сжатый и обработанный по красоте Тут будет текст
        который мы принимаем с бека уже сжатый и обработанный по красоте Тут будет текст который мы
        принимаем с бека уже сжатый и обработанный по красоте Тут будет текст который мы принимаем с
        бека уже сжатый и обработанный по красоте Тут будет текст который мы принимаем с бека уже
        сжатый и обработанный по красоте
      </ResultTextWrap>
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
