import { createTheme } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1760a5",
      light: "skyblue",
    },
    secondary: {
      main: "#15c630",
    },
    otherColor: {
      main: "#999",
    },
    darker: {
      main: "rgb(34,37,42)",
      lighter: "rgb(76,79,82)",
      light: "rgb(40,43,47)",
    },
    white: { main: "rgb(255,255,255)" },
  },
});
