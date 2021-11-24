import { Theme } from "@mui/material"
import { Box, styled } from "@mui/system"
import React from "react"

export type Props = {
  shrink?: boolean
}

const Container = styled(Box)(({ theme, shrink }: { theme: Theme; shrink?: boolean }) => {
  const base = {
    height: "100vh",
    background: "red",
  }

  if (shrink) {
    return { ...base, transition: "all 0.5s ease", width: theme.spacing(4) }
  } else {
    return { ...base, transition: "all 0.5s ease", width: theme.spacing(16) }
  }
})

export default function Drawer(props: Readonly<Props>) {
  const { shrink } = props

  return (
    <Container shrink={shrink}>
      <div>Layer1</div>
    </Container>
  )
}
