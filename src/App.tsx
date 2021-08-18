import "./style/app.css";
import React, { useEffect, useState, Fragment, CSSProperties } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Button, Grid, Paper, Switch as Switcher } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WbSunnySharpIcon from "@material-ui/icons/WbSunnySharp";
import Brightness3Icon from "@material-ui/icons/Brightness3";

import HelloWorld from "./components/HelloWorld";
import Skills from "./components/Skills";
import Team from "./components/Team";
import About from "./components/About";

import Footer from "./components/footer";
import ErrorBoundary from "./components/errorboundary";
import Nav from "./components/nav";
import ContactPage from "./components/contactPage";
import Main from "./components/main";
import Project from "./components/Project";

import Blogpage from "./components/Blogpage";
import Article from "./components/Article";

import Portfolio from "./components/Upcoming";
import Work from "./components/Work";
import QuestionWrapper from "./components/QuestionsWrapper";

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
  const ThemeContext = React.createContext(theme.palette.type);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Grid>
          <div className="navbar">
            <Nav />
            <div style={themeSwitcher}>
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
            </div>
          </div>
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
              <ErrorBoundary errorMsg="whoopsie daisy, something went wrong with the contact form...">
                <ContactPage></ContactPage>
              </ErrorBoundary>
            </Route>
            <Route path="/Project" exact component={Project}>
              <Project></Project>
            </Route>
            <Route path="/blog" exact component={Blogpage} />
            <Route path="/blog/:id" component={Article} />
            <Route path="/contact" component={ContactPage} />
            <Route component={Portfolio} path="/portfolio" exact />
            <Route component={Work} path="/portfolio/:id" exact />
            <Route path="/faq" exact component={QuestionWrapper} />
          </Switch>
        </Grid>
      </ThemeProvider>
    </Router>
  );
}

const themeSwitcher: CSSProperties = {
  /* display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end", */
  /*  backgroundColor: '#282c34', */
};
export default App;
