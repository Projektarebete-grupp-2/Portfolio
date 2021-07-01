import React, { useState, useEffect, Fragment } from "react";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  Button,
  Grid,
  Paper,
  Switch,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { pink } from "@material-ui/core/colors";
import { dark } from "@material-ui/core/styles/createPalette";

export default function Theme() {
  /*  function getInitMode(){
        const savedMode = JSON.parse(localStorage.getItem('dark'));
        getPrefColorsScheme();
        return savedMode ;
    }; */
  function getPrefColorsScheme() {
    if (
      !useMediaQuery(
        "prefers-color-scheme: dark" || "prefers-color-scheme: light"
      )
    )
      return;
    console.log(useMediaQuery("prefers-color-scheme: dark"));
  }

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#115293",
      },
    },
  });
  const lightTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#4791db",
      },
    },
  });

  return (
    <Fragment>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Paper className="root" style={{ height: "100vh" }}>
          <Grid container direction="column">
            <Typography variant="h4">Change Theme</Typography>
            <Typography variant="h4">
              {darkMode ? "darkTheme" : "lightTheme"}
            </Typography>
            {/* <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} color="default"></Switch> */}
          </Grid>
        </Paper>
      </ThemeProvider>
    </Fragment>
  );
}
