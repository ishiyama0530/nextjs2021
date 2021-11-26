import "../styles/globals.css"
import Head from "next/head"
import React, { ReactElement, ReactNode } from "react"
import type { AppProps } from "next/app"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { DebugObserver } from "../debug/recoil/DebugObserver"
import { NextPage } from "next"
import { RecoilRoot } from "recoil"
import { SWRConfig } from "swr"
import { theme } from "../mui/theme/default-theme"
import { env } from "../libs/config/env"

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <SWRConfig
      value={{
        refreshInterval: 60 * 1000,
        fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
      }}
    >
      <RecoilRoot>
        {env.debug && <DebugObserver />}
        <Head>
          {/* Viewport meta tags should not be used in _document.js's <Head> */}
          {/* https://github.com/vercel/next.js/blob/master/errors/no-document-viewport-meta.md */}
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <CssBaseline />
        <ThemeProvider theme={theme}>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
      </RecoilRoot>
    </SWRConfig>
  )
}

export default MyApp
