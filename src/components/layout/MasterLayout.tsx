import { Breakpoint, Container, Typography } from "@mui/material"
import React from "react"
import { useSession } from "../../hooks/useSession"
import { Redirect } from "../link/Redirect"

export type Props = {
  children: React.ReactNode
  maxWidth?: Breakpoint | false
  publicRoute?: boolean
}

export function MasterLayout(props: Readonly<Props>) {
  const { children, maxWidth, publicRoute } = props
  const session = useSession()

  if (!publicRoute && !session) {
    return <Redirect url="/login" />
  }

  return (
    <>
      <Typography>TITLE</Typography>
      <Typography>{session && session.user.name}</Typography>
      <Container component="main" maxWidth={maxWidth}>
        {children}
      </Container>
    </>
  )
}
