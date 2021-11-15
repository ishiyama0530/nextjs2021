import "../styles/globals.css"
import type { AppProps } from "next/app"
import React from "react"
import { SWRConfig } from "swr"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 60 * 1000,
        fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default MyApp
