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
import { makeStyles } from "@material-ui/core/styles";
import Blogpage from "./Blogpage";
import QuestionWrapper from "./QuestionsWrapper";

const useStyles = makeStyles({
  spacingDiv: {
    backgroundColor: "green",
    marginTop: "5em",
  },
});
function Main() {
  const classes = useStyles();
  return (
    <Paper>
      <Grid container direction="column">
        <Grid
          className={classes.spacingDiv}
          container
          direction="row"
          justify="flex-end"
        ></Grid>
        <HelloWorld />
        <Team />
        <Skills />
        <About />
        <Project />
        <ErrorBoundary errorMsg="Oops something went wrong">
          <Portfolio />
        </ErrorBoundary>
        {/* <Blogpage />
        <QuestionWrapper /> */}

        <Footer></Footer>
      </Grid>
    </Paper>
  );
}

export default Main;
