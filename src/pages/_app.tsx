import "../styles/globals.css"
import type { AppProps } from "next/app"
import React from "react"
import { SWRConfig } from "swr"
import { ThemeProvider } from "@mui/material"
import { theme } from "../mui/theme/default-theme"
import Head from "next/head"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 60 * 1000,
        fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
      }}
    >
      <Head>
        {/* _document.tsx に定義すると viewport の宣言が重複してしまう */}
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
  )
}

export default MyApp
