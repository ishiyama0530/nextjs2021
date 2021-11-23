import { Stack } from "@mui/material"
import React from "react"
import { useRecoilValue } from "recoil"
import { layer1ShrinkState } from "../../store/app/menu"
import Drawer from "./Drawer"

export type Props = {
  children: React.ReactNode
}

export function Layer1Layout(props: Readonly<Props>) {
  const { children } = props
  const shrink = useRecoilValue(layer1ShrinkState)

  return (
    <Stack direction="row">
      <Drawer shrink={shrink} />
      {children}
    </Stack>
  )
}
