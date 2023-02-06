/* eslint-disable no-extra-boolean-cast */
import styled from '@emotion/styled'
import CloseRounded from '@mui/icons-material/CloseRounded'
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded'
import MenuIcon from '@mui/icons-material/Menu'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'
import {
  Badge,
  Button,
  Chip,
  Divider,
  IconButton,
  Link as MLink,
  List,
  ListItem,
  ListItemButton,
  Paper,
  SwipeableDrawer,
  Typography
} from '@mui/material'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-grid-system'
import { Link, useNavigate } from 'react-router-dom'
import { Scrollbar } from 'react-scrollbars-custom'

import { ROUTES } from '../../consts/routes'
import {Flex, Spacer, Pad} from '../primitives'
import { Logo } from './Logo'
import {shiftRight} from "three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements";


export const Navbar = () => {
  const navigate = useNavigate()
  // const auth = useAuth()
  // const [drawerOpen, toggleDrawer] = useState(false)

  return (
    <div>
      <Wrapper id="main_navbar">
        <Flex as="button" onClick={() => navigate(ROUTES.HOME)}><Logo /></Flex>
        <Button variant="contained" onClick={() => navigate(ROUTES.LOGIN)}>Войти</Button>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1400px;
  justify-content: space-between;
  padding: 23px 0 0 0;
  margin: auto;
`

// const Avatar = styled.div`
//   height: 100px;
//   min-height: 100px;
//   width: 100px;
//   min-width: 100px;
//   background-color: #3300ff;
//   font-weight: 900;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 60px;
//   font-size: 40px;
// `
