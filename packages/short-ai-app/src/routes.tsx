import { ROUTES } from './consts/routes'
import { HomePage } from './features/home/HomePage'
import { ForgotPasswordPage } from './features/login/ForgotPasswordPage'
import { LoginPage } from './features/login/LoginPage'
import { RegPage } from './features/reg/RegPage'
import { UIkitTestPage } from './features/uikitTesting/UIkitTestPage'

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
    privatePage: true,
    featureActive: true
  },
  {
    element: <HomePage />,
    path: ROUTES.ROOT,
    privatePage: true,
    featureActive: true
  },

  {
    element: <UIkitTestPage />,
    path: '/ui_test',
    privatePage: true,
    featureActive: true
  }
]
