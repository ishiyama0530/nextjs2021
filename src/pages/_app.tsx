import "../styles/globals.css"
import type { AppProps } from "next/app"
import React from "react"
import { SWRConfig } from "swr"
import { ThemeProvider } from "@mui/material"
import { theme } from "../mui/theme/default-theme"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 60 * 1000,
        fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
      }}
    >
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
  )
}

export default MyApp
