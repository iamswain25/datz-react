import React from "react";
import Routes from "./config/Routes";
import { createTheme, ThemeProvider } from "@material-ui/core";
import useNoticeOn from "./components/useNoticeOn";
// declare module "@material-ui/core/styles/createBreakpoints" {
//   interface BreakpointOverrides {
//     xm: true;
//     lm: true;
//   }
// }
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      // xm: 375,
      sm: 1000,
      md: 1280,
      lg: 1542,
      // lm: 1542,
      xl: 1858,
    },
  },
});
export default function App() {
  useNoticeOn();
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
