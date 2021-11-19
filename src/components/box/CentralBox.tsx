import { Box, BoxProps, styled } from "@mui/system"
import React from "react"

export type Props = { fullWidth?: boolean; adjustHeight?: string } & BoxProps

export function CentralBox(props: Readonly<Props>) {
  const { children, fullWidth, adjustHeight, ...otherProps } = props

  const OuterBox = styled(Box)({
    height: adjustHeight ? `calc(100vh - ${adjustHeight})` : "100vh",
    width: "100%;",
    display: "flex;",
    justifyContent: "center",
    alignItems: "center",
  })

  return (
    <OuterBox {...otherProps}>
      <Box flexGrow={fullWidth ? 1 : 0}>{children}</Box>
    </OuterBox>
  )
}
