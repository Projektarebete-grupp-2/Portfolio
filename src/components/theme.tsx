import {
  createMuiTheme,
  Button,
  Grid,
  Paper,
  Switch as Switcher,
  ThemeProvider,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import WbSunnySharpIcon from "@material-ui/icons/WbSunnySharp";
import Brightness3Icon from "@material-ui/icons/Brightness3";

function Theme() {
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
  console.log(theme.palette.type);
  return (
    <>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </>
  );
}

export default Theme;
