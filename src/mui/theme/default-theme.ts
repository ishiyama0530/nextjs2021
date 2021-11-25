import { createTheme } from "@mui/material"

export const theme = createTheme({
  palette: {
    primary: {
      main: "#191970",
    },
  },
  components: {
    MuiIcon: {
      defaultProps: {
        baseClassName: "material-icons-two-tone",
      },
    },
  },
})
