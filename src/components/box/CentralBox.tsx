import { Box, BoxProps, styled } from "@mui/system"
import React from "react"

export type Props = { fullWidth?: boolean } & OuterBoxProps

type OuterBoxProps = { adjustHeight?: string } & BoxProps

export function CentralBox(props: Readonly<Props>) {
  const { children, fullWidth, ...otherProps } = props

  return (
    <OuterBox {...otherProps}>
      <Box flexGrow={fullWidth ? 1 : 0}>{children}</Box>
    </OuterBox>
  )
}

const OuterBox = styled(Box)(({ adjustHeight }: { adjustHeight?: string }) => ({
  height: adjustHeight ? "calc(100vh - " + adjustHeight + ")" : "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}))
