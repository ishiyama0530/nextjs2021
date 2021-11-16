import React from "react"
import NextLink, { LinkProps as NextLinkProps } from "next/link"
import MuiLink, { LinkProps as MuiLinkProps } from "@mui/material/Link"

export type Props = NextLinkProps &
  Pick<MuiLinkProps, "variant" | "color" | "underline" | "children" | "sx">

export default function Link(props: Readonly<Props>) {
  const { variant, color, underline, children, sx, ...nextLinkProps } = props
  return (
    <NextLink {...nextLinkProps}>
      <MuiLink
        href={nextLinkProps.href.toString()}
        rel="noopener noreferrer"
        {...{ variant, color, underline, children, sx }}
      />
    </NextLink>
  )
}
