import { Icon, Typography } from "@mui/material"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import React from "react"
import { usePrice } from "../hooks/usePrice"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
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

export default Home
