import React from "react";
import Routes from "./config/Routes";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { StickyContainer } from "react-sticky";
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
      sm: 1000,
      md: 1280,
      lg: 1542,
      // lm: 1542,
      xl: 1858,
    },
  },
});
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StickyContainer>
        <Routes />
      </StickyContainer>
    </ThemeProvider>
  );
}
