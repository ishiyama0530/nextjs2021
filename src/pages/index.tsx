import { Typography, Box } from "@mui/material"
import type { ReactElement } from "react"
import React from "react"
import { MIcon } from "../components/icon/MIcon"
import { Layer1Layout } from "../components/layout/Layer1Layout"
import { MasterLayout } from "../components/layout/MasterLayout"
import { Link } from "../components/link/Link"
import { usePrice } from "../hooks/usePrice"

const HomePage = () => {
  const { price, loading, error } = usePrice("BTCUSDT")

  if (loading) return <div>LOADING</div>
  if (error) return <div>ERROR</div>
  return (
    <Box>
      <MIcon>savings</MIcon>
      <Typography>
        {price?.symbol} - {price?.price}
      </Typography>
      <Link href="/login">Login</Link>
    </Box>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MasterLayout>
      <Layer1Layout>{page}</Layer1Layout>
    </MasterLayout>
  )
}

export default HomePage
