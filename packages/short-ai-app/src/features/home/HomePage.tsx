import styled from '@emotion/styled'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import {
  Box,
  Button,
  Chip,
  Container,
  Icon,
  Slider,
  Stack,
  Tooltip,
  Typography,
  useTheme
} from '@mui/material'
import { Col, Row } from 'react-grid-system'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '../../consts/routes'
import { Logo } from '../navigation/Logo'
import { Flex, Pad, Spacer } from '../primitives'
import { DropInput } from './DropInput'
import { FileDocIcon } from './FileDocIcon'
import { LinkIcon } from './LinkIcon'
import { TextAlignIcon } from './TextAlignIcon'
import {ScrollToTop} from "../navigation/ScrollToTop";

export const HomePage = () => {
  const navigate = useNavigate()
  const theme = useTheme()

  return (
    <div>
      <Typography variant={'h2'} alignItems={'center'} textAlign={'center'}>
        ShortAI — сервис для сокращения текстовой информации, документов и сайтов с использованием
        искусственного интеллекта
      </Typography>
      <Spacer space={30} />
      <Flex alignItems={'center'} flexDirection={'column'}>
        <Typography variant={'body1'}>Как это работает?</Typography>
        <Typography variant={'body2'}>Потяните ползунок</Typography>
        <Spacer space={10} />
        <Flex width={'30%'}>
          <Slider defaultValue={2} min={1} max={3} track={false} marks />
        </Flex>
      </Flex>
      <Spacer space={130} />
      <Flex
        width={'100%'}
        flexDirection={'column'}
        alignItems={'center'}
        style={{ backgroundColor: theme.palette.primary.main, borderRadius: '40px' }}
      >
        <Spacer space={50} />
        <Typography variant={'h1'} style={{color: '#ffffff'}} textAlign={'center'}>
          Что будем сокращать
        </Typography>
        <Spacer space={50} />
        <ButtonWrap>
          <Button size={'large'}
                  onClick={() => navigate(ROUTES.TEXT)}
                  endIcon={ <TextAlignIcon /> }>
              Текст
          </Button>
          <Button size={'large'}
                  onClick={() => navigate(ROUTES.LINK)}
                  endIcon={ <LinkIcon /> }>
              Ссылку
          </Button>
          <Button size={'large'}
                  onClick={() => navigate(ROUTES.FILE)}
                  endIcon={ <FileDocIcon /> }>
              Документ
          </Button>
        </ButtonWrap>
        <Spacer space={50} />
      </Flex>
    </div>
  )
}

const ButtonWrap = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  row-gap: 12px;
`

// const marks = [
//     {
//         value: 1,
//         label: "нормальная"
//     },
//     {
//         value: 2,
//         label: "сильная"
//     },
//     {
//         value: 3,
//         label: "максимальная"
//     }
// ]
