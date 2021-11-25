import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import React from "react"
import { User } from "../../hooks/useSession"

export type Props = {
  user?: User
}

export function Header(props: Readonly<Props>) {
  const { user } = props

  return (
    <Box component="header" sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: (theme) => theme.palette.primary.main }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TITLE
          </Typography>
          {user && <Button color="inherit">{user.name}</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
