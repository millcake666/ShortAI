/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-extra-boolean-cast */
import styled from '@emotion/styled'
import {
  Box,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Switch,
  Tooltip,
  Typography,
  useTheme
} from '@mui/material'
import { grey } from '@mui/material/colors'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { ROUTES } from '../../consts/routes'
import { AuthProvider, useAuth } from '../auth/AuthProvider'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { Flex, Pad, Spacer } from '../primitives'
import { blue, darkTheme } from '../themingAndStyling/theme'
import { ThemeSwitcher } from '../themingAndStyling/ThemeSwitcher'
import { AvatarIcon } from './AvatarIcon'
import { AvatarIcon36 } from './AvatarIcon36'
import { BookmarkIcon } from './BookmarkIcon'
import { DarkmodeIcon } from './DarkmodeIcon'
import { HistIcon } from './HistIcon'
import { Logo } from './Logo'
import { LogoutIcon } from './LogoutIcon'

const IS_DEV = process.env.NODE_ENV === 'development'

export const Navbar = () => {
  const navigate = useNavigate()
  const auth = useAuth()
  const location = useLocation()

  return (
    <div>
      <NavWrap id="main_navbar">
        <Flex as="button" onClick={() => navigate(ROUTES.HOME)} alignItems={'center'}>
          <Logo />
        </Flex>
        {location.pathname == ROUTES.REG ||
        location.pathname == ROUTES.LOGIN ||
        location.pathname == ROUTES.FORGOT ? (
          <></>
        ) : (
          <>
            {auth.access_token ? (
              <AvatarMenu />
            ) : (
              <Button
                size={'small'}
                onClick={() => navigate(ROUTES.LOGIN)}
                style={{ backgroundColor: blue[100], color: blue[500], borderColor: blue[500] }}
              >
                Войти
              </Button>
            )}
          </>
        )}
      </NavWrap>
      <Spacer />
    </div>
  )
}

const AvatarMenu = () => {
  const navigate = useNavigate()
  const { signout } = useAuth()
  const theme = useTheme()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Настройки">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <AvatarIcon36 />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        sx={{ backdropFilter: 'blur(0px)' }}
        anchorEl={anchorEl}
        id="basic-menu"
        open={open}
        onClick={handleClose}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        style={{ borderRadius: '10px !important' }}
      >
        <Spacer space={10} />
        <Typography textAlign={'center'}>email_adress@gmail.com</Typography>
        <Spacer space={10} />
        <Divider variant={'middle'} />
        <MenuItem onClick={() => navigate(ROUTES.HIST)}>
          <ListItemIcon>
            <HistIcon />
          </ListItemIcon>
          <Typography variant={'body1'} color={grey[600]}>
            История
          </Typography>
        </MenuItem>
        <MenuItem onClick={() => navigate(ROUTES.HIST)}>
          <ListItemIcon>
            <BookmarkIcon />
          </ListItemIcon>
          <Typography variant={'body1'} color={grey[600]}>
            Сохраненные текста
          </Typography>
        </MenuItem>
        {IS_DEV ? (
          <MenuItem>
            <ListItemIcon>
              <DarkmodeIcon />
            </ListItemIcon>
            <Typography variant={'body1'} color={grey[600]}>
              Темная тема*
            </Typography>
            <Pad pad={'0 0 0 20px'}>
              <ThemeSwitcher>
                <Switch size={'small'} checked={theme.palette.mode === 'dark'} />
              </ThemeSwitcher>
            </Pad>
          </MenuItem>
        ) : null}
        <MenuItem
          onClick={() => {
            handleClose()
            signout()
          }}
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>

          <Typography variant={'body1'} color={grey[600]}>
            Выход
          </Typography>
        </MenuItem>
      </Menu>
    </div>
  )
}

const NavWrap = styled.div`
  display: flex;
  position: center;
  //border: 1px solid black;
  width: 100%;
  height: 48px;
  max-width: 1400px;
  justify-content: space-between;
  margin: auto;
  margin-top: 20px;
`
