import { getDocument } from 'ssr-window'

const document = getDocument()

export const MAIN_APP_ID = 'root_app_container'

export const BREAKPOINTS: [
  xs: number,
  sm: number,
  md: number,
  lg: number,
  xl: number,
  xxl: number
] = [576, 800, 960, 1400, 1600, 1999]

export const BREAKPOINTS_NAMES = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']

export const APP_ENV = document.location.hostname.includes('dev') ? 'DEV_ENV' : 'PROD_ENV'
