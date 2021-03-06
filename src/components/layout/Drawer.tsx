import { Theme, Box, styled } from "@mui/material"
import React from "react"
import { toolbarHeight } from "../../libs/constants/layout"

export type Props = {
  open?: boolean
  children?: React.ReactNode
}

export default function Drawer(props: Readonly<Props>) {
  const { open, children } = props

  return <DrawerBox open={!!open}>{children}</DrawerBox>
}

const DrawerBox = styled(Box)(({ theme, open }: { theme?: Theme; open: boolean }) => {
  const base = {
    height: `calc(100vh - ${toolbarHeight})`,
    overflow: "hidden",
    background: theme?.palette.primary.main,
  }

  if (open) {
    return { ...base, transition: "all 0.5s ease", width: theme?.spacing(20) }
  } else {
    return { ...base, transition: "all 0.5s ease", width: theme?.spacing(7) }
  }
})

// sx で置き換え
// const DrawerBox = ({ open, ...others }: { open: boolean; children: React.ReactNode }) => {
//   const base: SxProps<Theme> = {
//     height: `calc(100vh - ${toolbarHeight})`,
//     overflow: "hidden",
//     background: (theme) => theme.palette.primary.main,
//   }
//   const sx: SxProps<Theme> = open
//     ? { ...base, transition: "all 0.5s ease", width: (theme) => theme.spacing(20) }
//     : { ...base, transition: "all 0.5s ease", width: (theme) => theme.spacing(7) }
//   return <Box {...others} sx={sx} />
// }
