import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import React from "react"
import { User } from "../../hooks/useSession"
import { MIcon } from "../icon/MIcon"

export type Props = {
  user?: User
  onMenuShrinkButtonClicked: () => void
}

export function Header(props: Readonly<Props>) {
  const { user, onMenuShrinkButtonClicked } = props

  return (
    <Box component="header" sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: (theme) => theme.palette.primary.main }}>
        <Toolbar sx={{ pl: { xs: 2 } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
            onClick={onMenuShrinkButtonClicked}
          >
            <MIcon>menu</MIcon>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TITLE
          </Typography>
          {user && <Button color="inherit">{user.name}</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
