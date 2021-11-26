import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material"
import React from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { layer1MenuOpenState } from "../../store/app/menu"
import { MIcon } from "../icon/MIcon"
import Drawer from "./Drawer"
import { useRouter } from "next/dist/client/router"

export type Props = {
  children: React.ReactNode
}

export function Layer1Layout(props: Readonly<Props>) {
  const { children } = props
  const router = useRouter()
  const [menuOpen, setMeuOpen] = useRecoilState(layer1MenuOpenState)

  const onMenuShrinkButtonClicked = () => setMeuOpen(!menuOpen)

  return (
    <Stack direction="row">
      <Drawer open={menuOpen}>
        <Box
          component="nav"
          aria-label="menu"
          sx={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
          <List sx={{ flexGrow: 1 }}>
            <Item
              open={menuOpen}
              text="HOME"
              icon="home"
              active={router.route === "/"}
              onClick={() => router.push("/")}
            />
            <Item
              open={menuOpen}
              text="SETTINGS"
              icon="settings"
              active={router.route === "/settings"}
              onClick={() => router.push("/settings")}
            />
            <Item
              open={menuOpen}
              text="HELP"
              icon="privacy_tip"
              active={router.route === "/help"}
              onClick={() => router.push("/help")}
            />
          </List>
          <List>
            <Item
              open={menuOpen}
              icon={menuOpen ? "menu_open" : "menu"}
              onClick={onMenuShrinkButtonClicked}
            />
          </List>
        </Box>
      </Drawer>
      <Box padding={3}>{children}</Box>
    </Stack>
  )
}

type ItemProps = {
  active?: boolean
  open: boolean
  text?: string
  icon: string
  onClick: () => void
}

const activeStyle: React.CSSProperties = {
  textDecoration: "none",
  backgroundColor: "rgba(0, 0, 0, 0.1)",
}

const Item = (props: ItemProps) => {
  const { active, open, text, icon, onClick } = props
  const style = active ? activeStyle : undefined

  return (
    <ListItem disablePadding sx={{ minHeight: 48 }} style={style} onClick={onClick}>
      <ListItemButton
        sx={{ pl: 2, maxWidth: (theme) => (open ? theme.spacing(20) : theme.spacing(7)) }}
      >
        <ListItemIcon
          sx={{
            minWidth: 40,
          }}
        >
          <MIcon sx={{ color: "#FFF" }}>{icon}</MIcon>
        </ListItemIcon>
        <ListItemText primary={text} primaryTypographyProps={{ color: "#FFF" }} />
      </ListItemButton>
    </ListItem>
  )
}
