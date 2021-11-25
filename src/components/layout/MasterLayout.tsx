import { Breakpoint, Container, ContainerProps, styled, Theme, useTheme } from "@mui/material"
import { useRouter } from "next/dist/client/router"
import React, { useEffect } from "react"
import Loading from "react-loading"
import { useRecoilState } from "recoil"
import { useSession } from "../../hooks/useSession"
import { layer1ShrinkState } from "../../store/app/menu"
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
  const [layer1Shrink, setLayer1Shrink] = useRecoilState(layer1ShrinkState)

  const allowAccess = publicRoute || !!session

  useEffect(() => {
    if (!allowAccess) {
      router.push("/login")
    }
  }, [allowAccess])

  const onMenuShrinkButtonClicked = () => setLayer1Shrink(!layer1Shrink)

  return (
    <>
      {allowAccess ? (
        <>
          {!noHeader && (
            <Header user={session?.user} onMenuShrinkButtonClicked={onMenuShrinkButtonClicked} />
          )}
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
