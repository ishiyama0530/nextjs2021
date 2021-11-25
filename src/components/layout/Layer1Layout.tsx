import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material"
import { CSSProperties } from "@mui/styled-engine"
import React from "react"
import { useRecoilValue } from "recoil"
import { layer1ShrinkState } from "../../store/app/menu"
import { MIcon } from "../icon/MIcon"
import Drawer from "./Drawer"

export type Props = {
  children: React.ReactNode
}

export function Layer1Layout(props: Readonly<Props>) {
  const { children } = props
  const shrink = useRecoilValue(layer1ShrinkState)

  return (
    <Stack direction="row">
      <Drawer shrink={shrink}>
        <nav aria-label="menu" style={{ overflow: "hidden" }}>
          <List>
            <Item shrink={shrink} />
            <Item shrink={shrink} />
            <Item shrink={shrink} active />
            <Item shrink={shrink} />
          </List>
        </nav>
      </Drawer>
      <Box padding={3}>{children}</Box>
    </Stack>
  )
}

const activeStyle: CSSProperties = {
  textDecoration: "none",
  backgroundColor: "rgba(0, 0, 0, 0.1)",
}

const Item = ({ active, shrink }: { active?: boolean; shrink: boolean }) => {
  const style = active ? activeStyle : undefined
  return (
    <ListItem disablePadding sx={{ minHeight: 48 }}>
      <ListItemButton
        sx={{ pl: 2, maxWidth: (theme) => (shrink ? theme.spacing(7) : theme.spacing(20)) }}
      >
        <ListItemIcon
          sx={{
            minWidth: 40,
          }}
        >
          <MIcon color="#FFF">dashboard</MIcon>
        </ListItemIcon>
        <ListItemText primary="Dashboard" primaryTypographyProps={{ color: "#FFF" }} />
      </ListItemButton>
    </ListItem>
  )
}
