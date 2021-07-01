
import React, { useEffect, useState } from "react";
import HelloWorld from "./HelloWorld";
import Skills from "./Skills";
import Team from "./Team";
import About from "./About";
import SimplePortal from "./portal";
import Footer from "./footer";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Grid, Paper, Switch } from "@material-ui/core";
import Header from './Header';


import WbSunnySharpIcon from "@material-ui/icons/WbSunnySharp";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import ErrorBoundary from "./errorboundary";

function Main() {
  function GetInitMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark") || "{}");
    const userPrefersDark = GetPrefColorsScheme();
    if (isReturningUser) {
      return savedMode;
    } else if (userPrefersDark) {
      return true;
    } else {
      return false;
    }
  }
  function GetPrefColorsScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  const [darkMode, setDarkMode] = useState(GetInitMode());
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });


    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100vh" }}>
        <Grid container direction="column">
          <Grid
            style={{ padding: "20px" }}
            container
            direction="row"
            justify="flex-end"
          >
            <WbSunnySharpIcon
              style={{ color: darkMode ? "grey" : "yellow" }}
            ></WbSunnySharpIcon>
            <Switch
              style={{ transition: "0.5s ease-out" }}
              checked={darkMode}
              color="default"
              onChange={() => setDarkMode((prevMode) => !prevMode)}
            ></Switch>
            <Brightness3Icon
              style={{ color: darkMode ? "slateblue" : "grey" }}
            ></Brightness3Icon>
          </Grid>
          <HelloWorld />
          <Team />
          <Skills />
          <About />
          <SimplePortal></SimplePortal>

          <Footer></Footer>
        </Grid>
      </Paper>
    </ThemeProvider>

  );
}
export default Main;
