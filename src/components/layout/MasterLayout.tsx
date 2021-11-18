import React, { useEffect, useMemo } from "react"
import { Breakpoint, Container, Typography, useTheme } from "@mui/material"
import { useSession } from "../../hooks/useSession"
import { useRouter } from "next/dist/client/router"
import { CentralBox } from "../box/CentralBox"
import Loading from "react-loading"

export type Props = {
  children: React.ReactNode
  maxWidth?: Breakpoint | false
  publicRoute?: boolean
}

export function MasterLayout(props: Readonly<Props>) {
  const { children, maxWidth, publicRoute } = props
  const session = useSession()
  const router = useRouter()
  const theme = useTheme()

  const allowAccess = publicRoute || !!session

  useEffect(() => {
    if (!allowAccess) {
      router.push("/login")
    }
  }, [allowAccess])

  return (
    <>
      <Typography>TITLE</Typography>
      <Typography>{session && session.user.name}</Typography>
      {allowAccess ? (
        <Container component="main" maxWidth={maxWidth}>
          {children}
        </Container>
      ) : (
        <CentralBox>
          <Loading type="cubes" color={theme.palette.info.main} height={100} width={100} />
        </CentralBox>
      )}
    </>
  )
}
