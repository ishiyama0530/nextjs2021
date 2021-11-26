import { Box, SxProps, Theme } from "@mui/system"
import React from "react"

export type Props = {
  children: React.ReactNode
  sx?: SxProps<Theme>
  size?: "18px" | "24px" | "36px" | "48px"
}

export function MIcon(props: Readonly<Props>) {
  const { children, sx, size } = props

  const csx: SxProps<Theme> = { ...sx, fontSize: size ?? "24px" }

  return (
    <Box component="span" className="material-icons" sx={csx}>
      {children}
    </Box>
  )
}
