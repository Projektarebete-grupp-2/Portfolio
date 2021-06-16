import React, { useEffect, useState } from "react";
import HelloWorld from "./components/HelloWorld";
import Skills from "./components/Skills";
import Team from "./components/Team";
import About from "./components/About";
import SimplePortal from "./components/portal";
import Footer from "./components/footer";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Button, Grid, Paper, Switch as Switcher } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WbSunnySharpIcon from "@material-ui/icons/WbSunnySharp";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import ErrorBoundary from "./components/errorboundary";

import Nav from "./components/nav";
import ContactPage from "./components/contactPage";
import Main from "./components/main";
import Project from "./components/Project";

function App() {
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

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Paper>
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
              <Switcher
                style={{ transition: "0.5s ease-out" }}
                checked={darkMode}
                color="default"
                onChange={() => setDarkMode((prevMode) => !prevMode)}
              ></Switcher>
              <Brightness3Icon
                style={{ color: darkMode ? "slateblue" : "grey" }}
              ></Brightness3Icon>
            </Grid>
            <Nav />
            <Switch>
              <Route path="/" exact component={Main}></Route>

              <Route path="/Team" exact component={Team}>
                <Team />
              </Route>
              <Route path="/Skills" exact component={Skills}>
                <Skills />
              </Route>
              <Route path="/About" component={About}>
                <About></About>
              </Route>
              <Route path="/ContactPage" exact component={ContactPage}>
                <ErrorBoundary errorMsg="oj ojo oj de blev ett fel">
                  <ContactPage></ContactPage>
                </ErrorBoundary>
              </Route>
              <Route path="/Project" exact component={Project}>
                <Project></Project>
              </Route>
            </Switch>
            <Footer></Footer>
          </Grid>
        </Paper>
      </ThemeProvider>
    </Router>
  );
}
export default App;
