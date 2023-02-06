import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import {Box, Button, Chip, Container, Slider, Stack, Tooltip, Typography} from '@mui/material'
import { Col, Row } from 'react-grid-system'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '../../consts/routes'
import {DropInput} from "./DropInput";
import {Spacer, Flex} from "../primitives";

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
        <DropInput />
        {/*<Flex style={{backgroundColor: "#1C40FF"}} width={"100%"} height={"20%"}><p>he</p></Flex>*/}
    </div>
  )
}

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

