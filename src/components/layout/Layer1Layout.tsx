import { Typography } from "@mui/material"
import React from "react"

export type MasterLayoutProps = {
  children: React.ReactNode
}

export default function Layer1Layout(props: Readonly<MasterLayoutProps>) {
  const { children } = props
  return (
    <>
      <Typography>Layer1</Typography>
      {children}
    </>
  )
}
