import useSWR from "swr"

export type Price = {
  symbol: string
  price: number
}

export function usePrice(symbol: string) {
  const { data, error } = useSWR<Price>(
    `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`
  )

  return {
    price: data,
    loading: !error && !data,
    error,
  }
}
