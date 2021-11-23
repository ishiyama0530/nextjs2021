import { Breakpoint, Container, Theme, useTheme } from "@mui/material"
import { createStyles, makeStyles } from "@mui/styles"
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      [theme.breakpoints.up("xs")]: {
        margin: 0,
        padding: 0,
      },
    },
  })
)

export function MasterLayout(props: Readonly<Props>) {
  const { children, maxWidth, publicRoute, noHeader } = props
  const session = useSession()
  const router = useRouter()
  const theme = useTheme()
  const classes = useStyles()
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
          <Container component="main" maxWidth={maxWidth} className={maxWidth ? "" : classes.main}>
            {children}
          </Container>
        </>
      ) : (
        <CentralBox>
          <Loading type="cubes" color={theme.palette.info.main} height={100} width={100} />
        </CentralBox>
      )}
    </>
  )
}
