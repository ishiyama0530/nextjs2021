import { Typography, Box } from "@mui/material"
import type { ReactElement } from "react"
import React from "react"
import { MIcon } from "../../components/icon/MIcon"
import { Layer1Layout } from "../../components/layout/Layer1Layout"
import { MasterLayout } from "../../components/layout/MasterLayout"

const SettingsPage = () => {
  return (
    <Box>
      <MIcon>settings</MIcon>
      <Typography>SETTINGS</Typography>
    </Box>
  )
}

SettingsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MasterLayout>
      <Layer1Layout>{page}</Layer1Layout>
    </MasterLayout>
  )
}

export default SettingsPage
