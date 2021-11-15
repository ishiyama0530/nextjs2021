import { createTheme } from "@mui/material"

export const theme = createTheme({
  components: {
    MuiIcon: {
      defaultProps: {
        baseClassName: "material-icons-two-tone",
      },
    },
  },
})
