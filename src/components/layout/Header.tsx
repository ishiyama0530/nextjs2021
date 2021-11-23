import { Box, Toolbar, IconButton, Typography, Button, Icon, AppBar } from "@mui/material"
import React, { useEffect } from "react"
import { User } from "../../hooks/useSession"

export type Props = {
  user?: User
  onMenuShrinkButtonClicked: () => void
}

export function Header(props: Readonly<Props>) {
  const { user, onMenuShrinkButtonClicked } = props

  return (
    <Box component="header" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={onMenuShrinkButtonClicked}
          >
            <Icon>menu</Icon>
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
