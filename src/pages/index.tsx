import { Icon, Typography } from "@mui/material"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import React from "react"
import type { ReactElement } from "react"
import MasterLayout from "../components/layout/MasterLayout"
import { usePrice } from "../hooks/usePrice"
import styles from "../styles/Home.module.css"
import Layer1Layout from "../components/layout/Layer1Layout"

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
