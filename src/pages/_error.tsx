import React from "react"
import { CentralBox } from "../components/box/CentralBox"
import { NextPageContext } from "next"
import { Typography } from "@mui/material"
import { styled } from "@mui/system"

type Props = {
  statusCode: string
}

const InlineBlock = styled("div")({
  display: "inline-block",
})

const Error = ({ statusCode }: Readonly<Props>) => {
  return (
    <CentralBox>
      <Typography variant="body1">
        {statusCode ? (
          <>
            <InlineBlock
              sx={{
                borderRight: "solid 2px #929299",
                paddingRight: "10px",
                marginRight: "10px",
              }}
            >
              {statusCode}
            </InlineBlock>
            <InlineBlock>Server-side error occurred.</InlineBlock>
          </>
        ) : (
          "An error occurred on client."
        )}
      </Typography>
    </CentralBox>
  )
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
