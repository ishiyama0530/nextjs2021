import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { usePrice } from "../hooks/usePrice"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  const { price, loading, error } = usePrice("BTCUSDT")

  if (loading) return <div>LOADING</div>
  if (error) return <div>ERROR</div>
  return (
    <div>
      <p>
        {price?.symbol} - {price?.price}
      </p>
    </div>
  )
}

export default Home
