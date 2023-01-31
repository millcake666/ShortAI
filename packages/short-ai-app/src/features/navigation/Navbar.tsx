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
import { useAuth } from '../auth/AuthProvider'
import { Absolute, Flex, Max, Pad, Pointer, Spacer, ZIndex } from '../primitives'
import { StatusBulb } from '../primitives/StatusBulb'
import { Visibility } from '../primitives/Visibility'
import { ThemeSwitcher } from '../themingAndStyling/ThemeSwitcher'
import { Logo } from './Logo'

export const Navbar = () => {
  const auth = useAuth()
  const navigate = useNavigate()
  const [drawerOpen, toggleDrawer] = useState(false)

  return (
    <div>
      <Wrapper id="main_navbar">
        <Container>
          <Row>
            <Col>
              <Pad padding="20px 0" alignItems="center" justifyContent="space-between">
                {!!auth.token ? (
                  <button onClick={() => navigate(ROUTES.HOME)}>
                    <Logo />
                  </button>
                ) : (
                  <Logo />
                )}
                <Flex alignItems="center">
                  <Spacer width={10} />
                  <Visibility visibleAt={['md', 'lg', 'xl', 'xxl']}>
                    {!!auth.token ? (
                      <Flex>
                        <Typography>
                          <b>
                            {auth?.user?.name} {auth?.user?.surname}
                          </b>
                        </Typography>
                        <Spacer width={4} />
                        <Typography>|</Typography>
                        <Spacer width={4} />
                      </Flex>
                    ) : null}
                  </Visibility>
                  <Spacer width={20} />
                  <ThemeSwitcher />
                  <Spacer width={20} />
                  {!!auth.token && (
                    <IconButton
                      onClick={() => toggleDrawer(true)}
                      size="large"
                      aria-label="menu"
                      sx={{ p: 0 }}
                    >
                      <MenuIcon />
                    </IconButton>
                  )}
                </Flex>
              </Pad>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Spacer space={80} />
    </div>
  )
}

const Drawer = styled(SwipeableDrawer)``

const Avatar = styled.div`
  height: 100px;
  min-height: 100px;
  width: 100px;
  min-width: 100px;
  background-color: #3300ff;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  font-size: 40px;
`

const Wrapper = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  left: 0;
  padding: 0 31px;
  backdrop-filter: blur(12px);
  /* border-radius: 30px; */

  & button {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  & div {
    /* padding-left: 0 !important; */
    /* padding-right: 0 !important; */
  }
`

const WidgetBlock = styled(Paper)`
  padding: 2vw;
  width: 100%;
`
