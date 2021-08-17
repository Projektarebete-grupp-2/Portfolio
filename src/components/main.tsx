import React, { useEffect, useState } from "react";
import HelloWorld from "./HelloWorld";
import Skills from "./Skills";
import Team from "./Team";
import About from "./About";
import Project from "./Project";

import Footer from "./footer";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Grid, Paper, Switch } from "@material-ui/core";
import Portfolio from "./Upcoming";

import WbSunnySharpIcon from "@material-ui/icons/WbSunnySharp";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import ErrorBoundary from "./errorboundary";

function Main() {
  return (
    <Paper style={{ height: "100vh" }}>
      <Grid container direction="column">
        <Grid
          style={{ padding: "20px" }}
          container
          direction="row"
          justify="flex-end"
        ></Grid>
        <HelloWorld />
        <Team />
        <Skills />
        <About />
        <Project />
        <Portfolio />
        <Footer></Footer>
      </Grid>
    </Paper>
  );
}
export default Main;
