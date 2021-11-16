import { Breakpoint, Container, ContainerTypeMap, Typography } from "@mui/material"
import React from "react"
import { useRecoilValue } from "recoil"
import { authState, checkAuthSelector } from "../../store/auth"

export type Props = {
  children: React.ReactNode
  maxWidth?: Breakpoint | false
}

export function MasterLayout(props: Readonly<Props>) {
  const { children, maxWidth } = props
  const auth = useRecoilValue(checkAuthSelector)
  const user = useRecoilValue(authState)?.user

  return (
    <>
      <Typography>TITLE</Typography>
      <Typography>{auth && user?.name}</Typography>
      <Container component="main" maxWidth={maxWidth}>
        {children}
      </Container>
    </>
  )
}
