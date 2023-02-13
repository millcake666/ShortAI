import 'reactjs-popup/dist/index.css'
import '../styles/global.css'
import 'react-modern-drawer/dist/index.css'

import { setConfiguration } from 'react-grid-system'
import { getWindow } from 'ssr-window'
import React from 'react'
import { UserAgentProvider } from '@quentin-sommer/react-useragent'

import { BREAKPOINTS } from 'consts/index'

const window: any = getWindow()
setConfiguration({ gutterWidth: 16, breakpoints: BREAKPOINTS })

const PageWrapper = (Comp) =>
  class PageWrapper extends React.Component {
    /*
     * Need to use args.ctx
     * See https://nextjs.org/docs/advanced-features/custom-document
     */
    static async getInitialProps(args) {
      return {
        ua: args.ctx.req ? args.ctx.req.headers['user-agent'] : navigator.userAgent,
        ...(Comp.getInitialProps ? await Comp.getInitialProps(args) : null)
      }
    }

    render() {
      // @ts-ignore
      const { ua, ...props } = this.props
      return (
        <UserAgentProvider ua={ua}>
          <Comp {...props} />
        </UserAgentProvider>
      )
    }
  }

PageWrapper.displayName = 'PageWrapper'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default PageWrapper(MyApp)
