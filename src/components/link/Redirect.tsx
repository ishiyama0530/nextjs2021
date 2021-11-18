import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { UrlObject } from "url"

type Url = UrlObject | string

type TransitionOptions = {
  shallow?: boolean
  locale?: string | false
  scroll?: boolean
}

export type Props = {
  url: Url
  as?: Url
  options?: TransitionOptions
}

export function Redirect(props: Readonly<Props>) {
  const router = useRouter()

  useEffect(() => {
    router.push(props.url, props.as, props.options)
  }, [props.as, props.options, props.url, router])

  return null
}
