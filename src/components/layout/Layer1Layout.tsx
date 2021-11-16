import { Typography } from "@mui/material"
import React from "react"

export type Props = {
  children: React.ReactNode
}

export function Layer1Layout(props: Readonly<Props>) {
  const { children } = props
  return (
    <>
      <Typography>Layer1</Typography>
      {children}
    </>
  )
}
