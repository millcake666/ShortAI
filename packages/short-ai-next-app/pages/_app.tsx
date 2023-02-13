import "large-small-dynamic-viewport-units-polyfill";
import "reactjs-popup/dist/index.css";
import "normalize.css";
import "@fontsource/inter";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/cyrillic-400.css";
import "@fontsource/inter/cyrillic-500.css";
import "@fontsource/inter/cyrillic-600.css";
import "@fontsource/inter/cyrillic-700.css";
import "@fontsource/inter/cyrillic-800.css";
import "../styles/global.css";
import "react-modern-drawer/dist/index.css";

import { setConfiguration } from "react-grid-system";
import { getWindow } from "ssr-window";
import React from "react";
import { UserAgentProvider } from "@quentin-sommer/react-useragent";

import { BREAKPOINTS } from "consts/index";

import { smoothscroll } from "../modules/utils/smooth";

smoothscroll();
const window: any = getWindow();
window.__forceSmoothScrollPolyfill__ = true;
setConfiguration({ gutterWidth: 16, breakpoints: BREAKPOINTS });

const PageWrapper = (Comp) =>
  class PageWrapper extends React.Component {
    /*
     * Need to use args.ctx
     * See https://nextjs.org/docs/advanced-features/custom-document
     */
    static async getInitialProps(args) {
      return {
        ua: args.ctx.req
          ? args.ctx.req.headers["user-agent"]
          : navigator.userAgent,
        ...(Comp.getInitialProps ? await Comp.getInitialProps(args) : null),
      };
    }

    render() {
      // @ts-ignore
      const { ua, ...props } = this.props;
      return (
        <UserAgentProvider ua={ua}>
          <Comp {...props} />
        </UserAgentProvider>
      );
    }
  };

PageWrapper.displayName = "PageWrapper";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default PageWrapper(MyApp);
