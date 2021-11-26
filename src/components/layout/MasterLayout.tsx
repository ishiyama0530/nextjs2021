import { Breakpoint, Container, ContainerProps, styled, Theme, useTheme } from "@mui/material"
import { useRouter } from "next/dist/client/router"
import React, { useEffect } from "react"
import Loading from "react-loading"
import { useSession } from "../../hooks/useSession"
import { CentralBox } from "../box/CentralBox"
import { Header } from "./Header"

export type Props = {
  children: React.ReactNode
  maxWidth?: Breakpoint | false
  publicRoute?: boolean
  noHeader?: boolean
}

export function MasterLayout(props: Readonly<Props>) {
  const { children, maxWidth, publicRoute, noHeader } = props
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
      {allowAccess ? (
        <>
          {!noHeader && <Header user={session?.user} />}
          <MainContainer maxWidth={maxWidth}>{children}</MainContainer>
        </>
      ) : (
        <CentralBox>
          <Loading type="cubes" color={theme.palette.info.main} height={100} width={100} />
        </CentralBox>
      )}
    </>
  )
}

const MainContainer = styled((props: ContainerProps) => <Container component="main" {...props} />)(
  ({ theme, maxWidth }: { theme: Theme } & ContainerProps) => {
    if (!maxWidth) {
      return {
        [theme.breakpoints.up("xs")]: {
          margin: 0,
          padding: 0,
        },
      }
    }
  }
)

// sx で置き換え
// const MainContainer = (props: { maxWidth?: Breakpoint | false; children: React.ReactNode }) => {
//   const { children, maxWidth } = props
//   const sx: SxProps<Theme> | undefined = maxWidth ? undefined : { m: { xs: 0 }, p: { xs: 0 } }
//   return (
//     <Container component="main" {...props} sx={sx}>
//       {children}
//     </Container>
//   )
// }
