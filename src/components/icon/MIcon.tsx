import React from "react"

export type Props = {
  children: React.ReactNode
  color?: string
  style?: React.CSSProperties | undefined
}

export function MIcon(props: Readonly<Props>) {
  const { children, color, style } = props
  const s = { ...style }
  if (color) {
    s.color = color
  }
  return (
    <span className="material-icons" style={s}>
      {children}
    </span>
  )
}
