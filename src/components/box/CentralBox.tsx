import { Box, BoxProps, styled } from "@mui/system"
import React from "react"

const CustomBox = styled(Box)({
  height: "100vh;",
  width: "100%;",
  display: "flex;",
  justifyContent: "center;",
  alignItems: "center;",
})

export type Props = BoxProps

export function CentralBox(props: Readonly<Props>) {
  return <CustomBox {...props} />
}
