import styled from '@emotion/styled'
import { Box, Button, Slider, Typography, useTheme } from '@mui/material'
import React from 'react'
import AnimateHeight from 'react-animate-height'
import { Col, Row } from 'react-grid-system'
import { useNavigate } from 'react-router-dom'
import Typewriter from 'typewriter-effect'

import { ROUTES } from '../../consts/routes'
import { Flex, Pad, Spacer } from '../primitives'
import { FileDocIcon } from './FileDocIcon'
import { LinkIcon } from './LinkIcon'
import { TextAlignIcon } from './TextAlignIcon'

const varText = [
  'ShortAI — онлайн сервис для сокращения текстовой информации, документов и сайтов с использованием искусственного интеллекта',
  'ShortAI — сервис, сокращающий текстовую информацию с сайтов и документов',
  'ShortAI — сокращает текста с сайтов и документов'
]

export const HomePage = () => {
  const navigate = useNavigate()
  const theme = useTheme()

  const [value, setValue] = React.useState<number>(1)
  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setValue(newValue)
    }
  }

  const textHeightMultiplier = window.innerWidth < 800 ? 2.7 : 1.5

  return (
    <div>
      <Flex flexDirection={'column'} justifyContent={'space-between'}>
        <HeadingWrapper>
          <AnimateHeight duration={500} height={varText[value].length * textHeightMultiplier}>
            <Typography variant={'h2'} alignItems={'center'} textAlign={'center'}>
              <Typewriter
                options={{ delay: 19 }}
                key={varText[value]}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(varText[value])
                    .callFunction(() => {
                      console.log('String typed out!')
                    })
                    .start()
                }}
              />
              {/* {varText[value]} */}
            </Typography>
          </AnimateHeight>
        </HeadingWrapper>

        <Spacer space={30} />
        <Flex alignItems={'center'} flexDirection={'column'}>
          <Typography variant={'body1'}>Как это работает?</Typography>
          <Typography variant={'body2'}>Потяните ползунок</Typography>
          <Spacer space={10} />
          <Flex width={'30%'}>
            <Slider defaultValue={1} min={0} max={2} track={false} marks onChange={handleChange} />
          </Flex>
        </Flex>
      </Flex>
      <Spacer space={60} mobSpace={30} />
      <Flex
        width={'100%'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        style={{
          backgroundColor: theme.palette.primary.main,
          borderRadius: '40px',
          maxWidth: '800px',
          margin: 'auto'
        }}
      >
        <Spacer space={50} />
        <Typography variant={'h1'} style={{ color: '#ffffff' }} textAlign={'center'}>
          Что будем сокращать
        </Typography>
        <Spacer space={50} />
        <ButtonWrap>
          <Button size={'large'} onClick={() => navigate(ROUTES.TEXT)} endIcon={<TextAlignIcon />}>
            Текст
          </Button>
          <Button size={'large'} onClick={() => navigate(ROUTES.LINK)} endIcon={<LinkIcon />}>
            Ссылку
          </Button>
          <Button size={'large'} onClick={() => navigate(ROUTES.FILE)} endIcon={<FileDocIcon />}>
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
const HeadingWrapper = styled.div``
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
