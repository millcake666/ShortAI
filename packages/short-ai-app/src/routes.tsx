import { ROUTES } from './consts/routes'
import { HomePage } from './features/home/HomePage'
import { ForgotPasswordPage } from './features/login/ForgotPasswordPage'
import { LoginPage } from './features/login/LoginPage'
import { RegPage } from './features/reg/RegPage'
import { TextPage } from './features/inputPages/textPage/TextPage'
import { LinkPage } from './features/inputPages/linkPage/LinkPage'
import { FilePage } from './features/inputPages/filePage/FilePage'
import { HistPage } from './features/hist/HistPage'

export const routes = [
  {
    element: <LoginPage />,
    path: ROUTES.LOGIN,
    privatePage: false,
    featureActive: true
  },
  {
    element: <RegPage />,
    path: ROUTES.REG,
    privatePage: false,
    featureActive: true
  },
  {
    element: <HomePage />,
    path: ROUTES.HOME,
    privatePage: false,
    featureActive: true
  },
  {
    element: <HomePage />,
    path: ROUTES.ROOT,
    privatePage: true,
    featureActive: true
  },
  {
    element: <HistPage />,
    path: ROUTES.HIST,
    privatePage: false,
    featureActive: true
  },
  {
    element: <TextPage />,
    path: ROUTES.TEXT,
    privatePage: false,
    featureActive: true
  },
  {
    element: <LinkPage />,
    path: ROUTES.LINK,
    privatePage: false,
    featureActive: true
  },
  {
    element: <FilePage />,
    path: ROUTES.FILE,
    privatePage: false,
    featureActive: true
  }
]
