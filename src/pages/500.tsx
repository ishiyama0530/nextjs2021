import { Typography, styled } from "@mui/material"
import React from "react"
import { CentralBox } from "../components/box/CentralBox"

const InlineBlock = styled("div")({
  display: "inline-block",
})

const Custom500 = () => {
  return (
    <CentralBox>
      <Typography variant="body1">
        <InlineBlock
          sx={{
            borderRight: "solid 2px #929299",
            paddingRight: "10px",
            marginRight: "10px",
          }}
        >
          500
        </InlineBlock>
        <InlineBlock>Server-side error occurred.</InlineBlock>
      </Typography>
    </CentralBox>
  )
}

export default Custom500
