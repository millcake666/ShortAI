/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Script from "next/script";

import { MAIN_APP_ID } from "consts";

export default function Home() {
  return (
    <>
      <Head>
        <title></title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="index,follow" />
        <meta name="HandheldFriendly" content="True" />

        <link
          rel="shortcut icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon.png"
        />
        <link
          rel="shortcut icon"
          type="image/svg+xml"
          href="/images/small_logo.svg"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon.png"
        />

        <meta property="og:title" content="DION" key="title" />
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="referrer" content="always" />
        <meta content="website" property="og:type" />
        <meta content="" property="og:url" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta content="" property="og:site_name" />

        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta
          name="description"
          content=""
        />
        <link rel="canonical" href="" />
      </Head>


      <div id={MAIN_APP_ID}>
        // index page content here
      </div>
    </>
  );
}

export const IndexPage = Home;
