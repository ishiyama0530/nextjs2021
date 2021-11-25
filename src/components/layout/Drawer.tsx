import { Theme, Box, styled } from "@mui/material"
import React from "react"

export type Props = {
  shrink?: boolean
  children?: React.ReactNode
}

export default function Drawer(props: Readonly<Props>) {
  const { shrink, children } = props

  return <DrawerBox shrink={!!shrink}>{children}</DrawerBox>
}

const DrawerBox = styled(Box)(({ theme, shrink }: { theme: Theme; shrink: boolean }) => {
  const base = {
    height: "100vh",
    overflow: "hidden",
    background: theme.palette.primary.main,
  }

  if (shrink) {
    return { ...base, transition: "all 0.5s ease", width: theme.spacing(7) }
  } else {
    return { ...base, transition: "all 0.5s ease", width: theme.spacing(20) }
  }
})
