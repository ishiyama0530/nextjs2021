import { Typography } from "@mui/material"
import React from "react"

export type MasterLayoutProps = {
  children: React.ReactNode
}

export default function MasterLayout(props: Readonly<MasterLayoutProps>) {
  const { children } = props
  return (
    <>
      <Typography>TITLE</Typography>
      {children}
    </>
  )
}
