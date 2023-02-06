/* eslint-disable no-extra-boolean-cast */
import styled from '@emotion/styled'
import {
    Avatar,
    Box,
    Button,
    Divider,
    Icon,
    IconButton, ListItemIcon,
    Menu,
    MenuItem,
    Switch,
    Tooltip,
    Typography
} from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { ROUTES } from '../../consts/routes'
import {Flex, Spacer, Pad} from '../primitives'
import { Logo } from './Logo'

import {shiftRight} from "three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements";
import {AuthProvider, useAuth} from "../auth/AuthProvider";
import {AvatarIcon} from "./AvatarIcon";
import style from "react-scrollbars-custom/dist/types/style";
import {Logout, PersonAdd, Settings} from "@mui/icons-material";


export const Navbar = () => {
  const navigate = useNavigate()
  const auth = useAuth()

  return (
    <div>
      <NavWrap id="main_navbar">
        <Flex as="button" onClick={() => navigate(ROUTES.HOME)}><Logo /></Flex>
          {
              auth.token ?
                  (
                      <MenuBar></MenuBar>
                  ) :
                  (<Button variant="contained" onClick={() => navigate(ROUTES.LOGIN)}>Войти</Button>)
          }

      </NavWrap>
    </div>
  )
}

const MenuBar = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return <div>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <Tooltip title="Account settings">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                </IconButton>
            </Tooltip>
        </Box>
        <Menu
            sx={{backdropFilter:"blur(0px)"}}
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },
                },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <MenuItem onClick={handleClose}>
                <Avatar /> Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <Settings fontSize="small" />
                </ListItemIcon>
                Settings
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                Logout
            </MenuItem>
        </Menu>
    </div>
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
