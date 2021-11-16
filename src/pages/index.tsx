import { Icon, Typography } from "@mui/material"
import type { ReactElement } from "react"
import React from "react"
import { Layer1Layout } from "../components/layout/Layer1Layout"
import { MasterLayout } from "../components/layout/MasterLayout"
import Link from "../components/link/Link"
import { usePrice } from "../hooks/usePrice"

const HomePage = () => {
  const { price, loading, error } = usePrice("BTCUSDT")

  if (loading) return <div>LOADING</div>
  if (error) return <div>ERROR</div>
  return (
    <div>
      <Icon>savings</Icon>
      <Typography>
        {price?.symbol} - {price?.price}
      </Typography>
      <Link href="/login">Login</Link>
    </div>
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
