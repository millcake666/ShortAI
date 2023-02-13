import { ROUTES } from './consts/routes'
import { HistPage } from './features/hist/HistPage'
import { HomePage } from './features/home/HomePage'
import { FilePage } from './features/inputPages/filePage/FilePage'
import { LinkPage } from './features/inputPages/linkPage/LinkPage'
import { TextPage } from './features/inputPages/textPage/TextPage'
import { ForgotPasswordPage } from './features/login/ForgotPasswordPage'
import { LoginPage } from './features/login/LoginPage'
import { RegPage } from './features/reg/RegPage'
import { ResultPage } from './features/resultPages/ResultPage'

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
    privatePage: false,
    featureActive: true
  },
  {
    element: <HistPage />,
    path: ROUTES.HIST,
    privatePage: true,
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
  },
  {
    element: <ResultPage />,
    path: ROUTES.RESULT,
    privatePage: false,
    featureActive: true
  },
  {
    element: <ForgotPasswordPage />,
    path: ROUTES.FORGOT,
    privatePage: false,
    featureActive: true
  }
]
