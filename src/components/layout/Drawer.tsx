import { Theme } from "@mui/material"
import { createStyles, makeStyles } from "@mui/styles"
import { Box, styled } from "@mui/system"
import React from "react"

export type Props = {
  shrink?: boolean
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    open: {
      transition: "all 0.5s ease",
      width: theme.spacing(16),
    },
    shrink: {
      transition: "all 0.5s ease",
      width: theme.spacing(4),
    },
  })
)

const Container = styled(Box)(({ theme }) => ({
  height: "100vh",
  background: "red",
}))

export default function Drawer(props: Readonly<Props>) {
  const classes = useStyles()
  const { shrink } = props

  return (
    <Container className={shrink ? classes.shrink : classes.open}>
      <div>Layer1</div>
    </Container>
  )
}
