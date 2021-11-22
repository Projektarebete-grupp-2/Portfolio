import React, { useEffect, useState } from "react";
import HelloWorld from "./HelloWorld";
import Skills from "./Skills";
import Team from "./Team";
import About from "./About";
import Project from "./Project";
import LinnState from "./LinnState";
import Clock from "./LinnStateSecond";
import Linns from "./LinnComponent";
import LinnAlessa from "./LinnAlessa";
import MyModal from "./LinnModal";





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
import ContactPage from "./contactPage";




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
        <LinnAlessa
          title="Linn Alessandra"
          subtitle="Get to know me and check out some fun code examples!"
        ></LinnAlessa>
         <Linns
          title="About me"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ></Linns>
        <Clock />
        <ErrorBoundary errorMsg="Something went wrong"> 
          <MyModal />
        </ErrorBoundary> 
        <LinnState /> 
        <About />
        <Project />
        <ErrorBoundary errorMsg="Oops something went wrong">
          <Portfolio />
        </ErrorBoundary>
        {/* <Blogpage />
        <QuestionWrapper /> */}
        <ContactPage />


  

        

        <Footer></Footer>
      </Grid>
    </Paper>
  );
  
}



export default Main;
