import { useTheme } from "@mui/material"
import { Box, styled } from "@mui/system"
import React from "react"
import ReactLoading from "react-loading"

const Loading = styled(ReactLoading)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translateY(-50%) translateX(-50%)",
  margin: "auto",
})

const OverlayDiv = styled("div")({
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  opacity: 0.7,
  zIndex: 99998,
})

export type Props = {
  children: React.ReactNode
  loading?: boolean
}

export function FormProgress(props: Readonly<Props>) {
  const { children, loading } = props
  const theme = useTheme()

  if (!loading) {
    return <>{children}</>
  }

  return (
    <Box position="relative">
      <Loading type="cylon" color={theme.palette.info.main} height={50} width={50} />
      <OverlayDiv>{children}</OverlayDiv>
    </Box>
  )
}
