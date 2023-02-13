/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { css, Global } from '@emotion/react'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useTheme } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import React, { useEffect } from 'react'

import { RFCC } from '../../types/react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { ColorModeContext } from './BrandingProvider'

export const ThemeSwitcher: RFCC = ({ children }) => {
  const theme = useTheme()
  const colorMode = React.useContext(ColorModeContext)
  const [themeLS] = useLocalStorage('theme', theme.palette.mode || 'light')

  // useEffect(() => {}, [theme.palette.mode])

  return children ? (
    <div onClick={colorMode.toggleColorMode}>{children}</div>
  ) : (
    <IconButton onClick={colorMode.toggleColorMode} color="inherit">
      {themeLS === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      <Global
        styles={css`
          body {
            color-scheme: ${theme.palette.mode};
          }
        `}
      />
    </IconButton>
  )
}

// color-scheme
