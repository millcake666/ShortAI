import '@short-ai/sfprorounded-typeface/index.css'
import './features/themingAndStyling/index.css'

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import { setConfiguration } from 'react-grid-system'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { BREAKPOINTS } from './consts/common'
import { AuthProvider, RequireAuth } from './features/auth/AuthProvider'
import { ErrorPage } from './features/errors/ErrorPage'
import { NotFound } from './features/errors/NotFound'
import { UnderConstruction } from './features/errors/UnderConstruction'
import { GlobalLayout } from './features/layouts/GlobalLayout'
import { ScrollToTop } from './features/navigation/ScrollToTop'
import BrandingProvider from './features/themingAndStyling/BrandingProvider'
import { routes } from './routes'

setConfiguration({
  gutterWidth: 20,
  breakpoints: BREAKPOINTS,
  containerWidths: [540, 740, 800, 800, 800, 800]
})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000
    }
  }
})

export const App = () => {
  return (
    <BrandingProvider>
      <BrowserRouter>
        <ErrorBoundary
          FallbackComponent={ErrorPage}
          onReset={() => {
            // reset the state of your app so the error doesn't happen again
          }}
        >
          <QueryClientProvider client={queryClient}>
            <AuthProvider>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Routes>
                  <Route element={<GlobalLayout />}>
                    {routes.map((route) => {
                      const comp = !route.featureActive ? (
                        <UnderConstruction />
                      ) : route.privatePage ? (
                        <RequireAuth>{route.element}</RequireAuth>
                      ) : (
                        route.element
                      )
                      return <Route key={route.path} path={route.path} element={comp} />
                    })}
                    <Route path="*" element={<NotFound />} />
                  </Route>
                </Routes>
                <Toaster
                  position="bottom-left"
                  reverseOrder={false}
                  gutter={8}
                  containerClassName=""
                  containerStyle={{}}
                  toastOptions={{
                    // Define default options
                    className: '',
                    duration: 5000,
                    style: {
                      background: '#1a1e34',
                      color: '#fff'
                    }
                  }}
                />
              </LocalizationProvider>
            </AuthProvider>
          </QueryClientProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </BrandingProvider>
  )
}

const element = document.getElementById('root')

// Tell React to take control of that element
// In TypeScript, since there is a bug, you need to add the "!" element!
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/43848
const root = ReactDOM.createRoot(element!)

root.render(<App />)
