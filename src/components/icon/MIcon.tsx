import React from "react"

export type Props = {
  children: React.ReactNode
  color?: string
  style?: React.CSSProperties | undefined
  size?: "18px" | "24px" | "36px" | "48px"
}

export function MIcon(props: Readonly<Props>) {
  const { children, color, style, size } = props
  const cStyle = { ...style }
  if (color) {
    cStyle.color = color
  }

  cStyle.fontSize = size ?? "24px"

  return (
    <span className="material-icons" style={cStyle}>
      {children}
    </span>
  )
}
