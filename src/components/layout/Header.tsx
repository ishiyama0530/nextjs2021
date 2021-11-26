import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material"
import React, { useState } from "react"
import { useSetRecoilState } from "recoil"
import { User } from "../../hooks/useSession"
import { authState } from "../../store/auth"
import { MIcon } from "../icon/MIcon"
import { Link } from "../link/Link"
import { AccountMenu } from "./AccountMenu"

export type Props = {
  user?: User
}

export function Header(props: Readonly<Props>) {
  const { user } = props
  const setAuthState = useSetRecoilState(authState)

  const [anchorEl, setAnchorEl] = useState<HTMLElement | undefined>(undefined)

  const onAccountIconClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const onAccountMenuClose = () => {
    setAnchorEl(undefined)
  }

  const onLogout = () => {
    setAuthState({})
  }

  return (
    <Box component="header" sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: (theme) => theme.palette.primary.main }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" sx={{ color: "#FFF" }}>
              TITLE
            </Link>
          </Typography>
          {user && (
            <>
              <Typography variant="body1" component="div">
                {user.name}
              </Typography>
              <IconButton
                size="large"
                color="inherit"
                aria-label="account"
                onClick={onAccountIconClick}
              >
                <MIcon size="36px">account_circle</MIcon>
              </IconButton>
              <AccountMenu anchorEl={anchorEl} onClose={onAccountMenuClose} onLogout={onLogout} />
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
