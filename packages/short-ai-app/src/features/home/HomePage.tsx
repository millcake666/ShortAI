import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import {Box, Button, Chip, Container, Icon, Slider, Stack, Tooltip, Typography} from '@mui/material'
import { Col, Row } from 'react-grid-system'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '../../consts/routes'
import {DropInput} from "./DropInput";
import {Spacer, Flex, Pad} from "../primitives";
import styled from "@emotion/styled";
import {Logo} from "../navigation/Logo";
import {TextAlignIcon} from "./TextAlignIcon";
import {LinkIcon} from "./LinkIcon";
import {FileDocIcon} from "./FileDocIcon";

export const HomePage = () => {
  const navigate = useNavigate()

  return (
    <div>
        <Typography variant={"h2"}>ShortAI — сервис для сокращения текстовой информации, документов и сайтов с использованием искусственного интеллекта</Typography>
        <Spacer space={50} />
        <Flex alignItems={"center"} flexDirection={"column"}>
            <Typography variant={"body1"}>Как это работает</Typography>
            <Typography variant={"body1"} style={{color: "blue"}}>Потяните ползунок</Typography>
            <Flex width={"30%"}>
                <Slider defaultValue={2} min={1} max={3} track={false} marks={marks}>
                </Slider>
            </Flex>
        </Flex>
        <Spacer space={172} />
        <Flex width={"100%"}
              flexDirection={"column"}
              alignItems={"center"}
              style={{backgroundColor: "#1C40FF", borderRadius: "40px"}}>
            <Spacer space={50} />
            <Typography variant={"h1"} style={{color: "#ffffff"}}>Что будем сокращать</Typography>
            <Spacer space={50} />
            <ButtonWrap>
                <Button variant={"contained"}
                        style={{backgroundColor: "white", color: "black", justifyContent: "space-between", borderRadius: "30px", fontSize: "25px"}}
                        endIcon={<IconWrap><TextAlignIcon /></IconWrap>}>
                    <span style={{marginLeft: "10px"}}>Текст</span>     {/* итого отступ от края кнопки 20px */}
                </Button>
                <Button variant={"contained"}
                        style={{backgroundColor: "white", color: "black", justifyContent: "space-between", borderRadius: "30px", fontSize: "25px"}}
                        endIcon={<IconWrap><LinkIcon /></IconWrap>}>
                    <span style={{marginLeft: "10px"}}>Ссылку</span>
                </Button>
                <Button variant={"contained"}
                        style={{backgroundColor: "white", color: "black", justifyContent: "space-between", borderRadius: "30px", fontSize: "25px"}}
                        endIcon={<IconWrap><FileDocIcon /></IconWrap>}>
                    <span style={{marginLeft: "10px"}}>Документ</span>
                </Button>
            </ButtonWrap>
            <Spacer space={50} />
        </Flex>
    </div>
  )
}

const IconWrap = styled.div`
  margin-right: 10px;
`

const ButtonWrap = styled.div`
  display: grid;
  width: 60%;
  grid-template-columns: 1fr;
  row-gap: 12px;
`

const marks = [
    {
        value: 1,
        label: "нормальная"
    },
    {
        value: 2,
        label: "сильная"
    },
    {
        value: 3,
        label: "максимальная"
    }
]

