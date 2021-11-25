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
import { useRecoilValue } from "recoil"
import { layer1ShrinkState } from "../../store/app/menu"
import { MIcon } from "../icon/MIcon"
import Drawer from "./Drawer"
import { useRouter } from "next/dist/client/router"

export type Props = {
  children: React.ReactNode
}

export function Layer1Layout(props: Readonly<Props>) {
  const { children } = props
  const router = useRouter()
  const shrink = useRecoilValue(layer1ShrinkState)

  return (
    <Stack direction="row">
      <Drawer shrink={shrink}>
        <nav aria-label="menu">
          <List>
            <Item
              shrink={shrink}
              text="HOME"
              icon="home"
              active={router.route === "/"}
              onClick={() => router.push("/")}
            />
            <Item
              shrink={shrink}
              text="SETTINGS"
              icon="settings"
              active={router.route === "/settings"}
              onClick={() => router.push("/settings")}
            />
            <Item
              shrink={shrink}
              text="HELP"
              icon="privacy_tip"
              active={router.route === "/help"}
              onClick={() => router.push("/help")}
            />
          </List>
        </nav>
      </Drawer>
      <Box padding={3}>{children}</Box>
    </Stack>
  )
}

type ItemProps = {
  active?: boolean
  shrink: boolean
  text: string
  icon: string
  onClick: () => void
}

const activeStyle: React.CSSProperties = {
  textDecoration: "none",
  backgroundColor: "rgba(0, 0, 0, 0.1)",
}

const Item = (props: ItemProps) => {
  const { active, shrink, text, icon, onClick } = props
  const style = active ? activeStyle : undefined

  return (
    <ListItem disablePadding sx={{ minHeight: 48 }} style={style} onClick={onClick}>
      <ListItemButton
        sx={{ pl: 2, maxWidth: (theme) => (shrink ? theme.spacing(7) : theme.spacing(20)) }}
      >
        <ListItemIcon
          sx={{
            minWidth: 40,
          }}
        >
          <MIcon color="#FFF">{icon}</MIcon>
        </ListItemIcon>
        <ListItemText primary={text} primaryTypographyProps={{ color: "#FFF" }} />
      </ListItemButton>
    </ListItem>
  )
}
