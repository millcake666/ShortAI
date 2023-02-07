import {createTheme, ThemeOptions} from '@mui/material'

import { BREAKPOINTS } from '../../consts/common'

export const fadeInOutConfig = {
  from: { opacity: 0, config: { duration: 200 } },
  enter: { opacity: 1, config: { duration: 200 } },
  leave: { opacity: 0, config: { duration: 200 } }
}

export const blue = {
  50: '#F1F2FE',
  100: '#E3E6FC',
  200: '#BFC5F9',
  300: '#959EF5',
  400: '#717DF1',
  main: '#1C40FF',
  500: '#1C40FF',
  600: '#3E4ABE',
  700: '#2F3890',
  800: '#252C72',
  900: '#1C2256'
}

export const blueSecondary = {
  50: '#F1F2FE',
  100: '#E3E6FC',
  200: '#BFC5F9',
  300: '#959EF5',
  400: '#717DF1',
  main: '#E3E6FC',
  500: '#E3E6FC',
  600: '#3E4ABE',
  700: '#2F3890',
  800: '#252C72',
  900: '#1C2256'
}

export const blueDark = {
  50: '#F1F2FE',
  100: '#E3E6FC',
  200: '#BFC5F9',
  300: '#959EF5',
  400: '#717DF1',
  main: '#1C40FF',
  500: '#1C40FF',
  600: '#3E4ABE',
  700: '#2F3890',
  800: '#0A1657',
  900: '#070F3D'
}

const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7', // vs blueDark 900: WCAG 11.6 AAA, APCA 78 Best for text
  400: '#B2BAC2', // vs blueDark 900: WCAG 9 AAA, APCA 63.3 Ok for text
  500: '#A0AAB4', // vs blueDark 900: WCAG 7.5 AAA, APCA 54.3 Only for large text
  600: '#6F7E8C', // vs white bg: WCAG 4.1 AA, APCA 68.7 Ok for text
  700: '#3E5060', // vs white bg: WCAG 8.3 AAA, APCA 88.7 Best for text
  800: '#2D3843', // vs white bg: WCAG 11.9 AAA, APCA 97.3 Best for text
  900: '#1A2027'
}

export const themeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: BREAKPOINTS[1],
      md: BREAKPOINTS[2],
      lg: BREAKPOINTS[3],
      xl: BREAKPOINTS[4]
    }
  },
  palette: {
    primary: {
      ...blue
    },
    secondary: {
      ...blueSecondary
    },
    background: {
      default: '#FFF6EF'
    },
    text: {
      primary: '#252B5C',
      disabled: '#7484AC',
      secondary: '#000'
    },
    divider: 'rgba(0, 0, 0, 0.05)',
    error: {
      main: '#E46161',
      light: '#FBE8E8'
    }
  },
  spacing: 8,
  shape: {
    borderRadius: 25
  },
  typography: {
    fontFamily: 'SFRounded',
    h1: {
      fontSize: 45,
      fontWeight: 700
    },
    h2: {
      fontSize: 32,
      fontWeight: 700
    },
    h3: {
      fontSize: 26,
      fontWeight: 700
    },
    h4: {
      fontSize: 20,
      fontWeight: 600
    },
    h5: {
      fontSize: 18,
      fontWeight: 600
    },
    subtitle1: {
      fontSize: 18,
      fontWeight: 400
    },
    subtitle2: {
      fontSize: 18,
      fontWeight: 400
    },
    body1: {
      fontSize: 14,
      fontWeight: 600,
      color: '#000'
    },
    body2: {
      fontSize: 14,
      fontWeight: 600,
      color: blue[500]
    },
    button: {
      fontSize: 18,
      fontWeight: 400
    },
    caption: {
      fontSize: 14,
      fontWeight: 400
    }
  },
  shadows: [
    'none',
    '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
    '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
    '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
    '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
    '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
    '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
    '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
    '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
    '0px 50px 100px 0px #d7c8bb'
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        sizeLarge: {
          padding: '10px 20px',
          justifyContent: 'space-between',
          fontSize: '22px',
          fontWeight: 600,
          borderRadius: '30px',
          '&:hover': {
            backgroundColor: '#DCDCDE'
          }
        },
        sizeMedium: {

        },
        sizeSmall: {
          padding: '6px 16px',
          height: '42px',
          fontSize: 16,
          fontWeight: 500,
          borderRadius: 25,
          '&:hover': {
            backgroundColor: blue[400]
          }
        },
        outlined: {
          backgroundColor: '#fff',
          border: '',
        },
        root: {
          padding: '8px 20px',
          fontSize: 25,
          fontWeight: '600',
          borderRadius: 25,
          backgroundColor: '#fff',
          color: '#000',
          boxShadow: 'none',
          textTransform: 'none'
        }
      }
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 36,
          height: 20,
          padding: 0,
          margin: 2,
        },
        switchBase: {
          padding: '2px !important',
          '&checked, &$colorPrimary$checked, &$colorSecondary$checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + $track': {
              opacity: 1,
              border: 'none'
            }
          }
        },
        thumb: {
          width: 24,
          height: 24
        },
        track: {
          borderRadius: 13,
          backgroundColor: '#dcdcde',
          opacity: 1,
          transition:
            'background-color 300ms cubic-bezier(0.4, 0, 0.2, 0.5) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 0.5) 0ms !important'
        }
      }
    }
  }
}

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      ...blue
    },
    secondary: {
      ...blueSecondary
    },
    background: {
      default: '#fff6ef',
      paper: '#252B5C'
    },
    text: {
      primary: '#ffffff',
      disabled: '#A6BBF1',
      secondary: '#A6BBF1'
    },
    divider: '#36405B',
    error: {
      main: '#E46161',
      light: '#FBE8E8'
    }
  },
  spacing: 8,
  shape: {
    borderRadius: 25
  },
  typography: {
    fontFamily: 'SFRounded',
    h1: {
      fontSize: 70
    },
    h5: {
      fontSize: 24,
      lineHeight: '28px'
    },
    h6: {
      fontSize: 18,
      fontWeight: 'normal'
    }
  }
})

export const lightTheme = createTheme(themeOptions)
