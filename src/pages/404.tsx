import { Typography } from "@mui/material"
import { styled } from "@mui/system"
import React from "react"
import { CentralBox } from "../components/box/CentralBox"

const InlineBlock = styled("div")({
  display: "inline-block",
})

const Custom404 = () => {
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
          404
        </InlineBlock>
        <InlineBlock>This page could not be found.</InlineBlock>
      </Typography>
    </CentralBox>
  )
}

export default Custom404
