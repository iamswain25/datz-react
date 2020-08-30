import React from "react";
import Routes from "./config/Routes";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
// declare module "@material-ui/core/styles/createBreakpoints" {
//   interface BreakpointOverrides {
//     xm: true;
//     lm: true;
//   }
// }
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      // xm: 375,
      sm: 600,
      md: 1000,
      lg: 1280,
      // lm: 1542,
      xl: 1858,
    },
  },
});
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
