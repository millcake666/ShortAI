/* eslint-disable @next/next/no-img-element */
// @ts-nochec
import Document, { Main, NextScript, Head } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { Html } from "next/document";
import Script from "next/script";

const attrs = {
  xmlns: "http://www.w3.org/1999/xhtml",
  "xmlns:fb": "http://ogp.me/ns/fb#",
};

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ru" prefix="og: http://ogp.me/ns#" {...attrs}>
        <Head>
          <Script
            id="ya_anal"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; var z = null;m[i].l=1*new Date(); for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }} k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym'); ym(90130157, 'init', { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true, ecommerce:'dataLayer' });
              `,
            }}
          />
          <meta name="yandex-verification" content="16749c9a51fc7d04" />
          <Script
            id="vk_track"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            !function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src='https://vk.com/js/api/openapi.js?169',t.onload=function(){VK.Retargeting.Init("VK-RTRG-1520956-dC2Nk"),VK.Retargeting.Hit()},document.head.appendChild(t)}();`,
            }}
          />

          <Script
            id="mail_top"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
          var _tmr = window._tmr || (window._tmr = []);
          _tmr.push({id: "3259950", type: "pageView", start: (new Date()).getTime(), pid: "USER_ID"});
          (function (d, w, id) {
            if (d.getElementById(id)) return;
            var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
            ts.src = "https://top-fwz1.mail.ru/js/code.js";
            var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
            if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
          })(document, window, "tmr-code");
  `,
            }}
          />

          <Script
            id="mail_top_suffix"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `var _tmr = _tmr || [];
          _tmr.push({
              type: 'itemView',
              productid: 'VALUE',
              pagetype: 'VALUE',
              list: 'VALUE',
              totalvalue: 'VALUE'
          });`,
            }}
          />
        </Head>

        <body>
          <noscript>
            <div>
              <img
                src="https://top-fwz1.mail.ru/counter?id=3259950;js=na"
                style={{ position: "absolute", left: "-9999px" }}
                alt="Top.Mail.Ru"
              />
            </div>
          </noscript>
          <noscript>
            <img
              src="https://vk.com/rtrg?p=VK-RTRG-1520956-dC2Nk"
              style={{ position: "fixed", left: "-999px" }}
              alt=""
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
