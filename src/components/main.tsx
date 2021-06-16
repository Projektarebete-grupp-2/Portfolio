import React, { useEffect, useState } from "react";
import HelloWorld from "./HelloWorld";
import Skills from "./Skills";
import Team from "./Team";
import About from "./About";
import SimplePortal from "./portal";
import Footer from "./footer";
import {
  createMuiTheme,
  ThemeProvider,
  useTheme,
} from "@material-ui/core/styles";
import { Button, Grid, Paper, Switch as Switcher } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WbSunnySharpIcon from "@material-ui/icons/WbSunnySharp";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import ErrorBoundary from "./errorboundary";

import Nav from "./nav";
import ContactPage from "./contactPage";

function Main() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Grid container direction="column">
          <HelloWorld />
          <Team />
          <Skills />
          <About />
        </Grid>
      </Paper>
    </ThemeProvider>
  );

  {
    /* <Router>
      <ThemeProvider theme={theme}>
        <Paper style={{ height: "100vh" }}>
          <Grid container direction="column">

            <SimplePortal></SimplePortal>
          </Grid>
        </Paper>
      </ThemeProvider>
    </Router> */
  }
}
export default Main;
