import { Menu, MenuItem } from "@mui/material"
import React from "react"

export type Props = {
  anchorEl?: HTMLElement
  onClose: () => void
  onLogout: () => void
}

export function AccountMenu(props: Readonly<Props>) {
  const { anchorEl, onClose, onLogout } = props
  const open = !!anchorEl

  return (
    <Menu
      aria-label="account menu"
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <MenuItem onClick={onLogout}>Logout</MenuItem>
    </Menu>
  )
}
