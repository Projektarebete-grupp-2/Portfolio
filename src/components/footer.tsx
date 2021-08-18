import { Button, Paper, ThemeProvider, useTheme } from "@material-ui/core";
import React, { CSSProperties, Fragment, useState } from "react";
import SocialFollow from "./socialmedia";

import { Typography } from "@material-ui/core/styles/createTypography";

interface Props {}

const Footer = (props: Props) => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        {/* main footer */}
        <div style={mainFooter}>
          <div>Göteborgsgatan 1111 Göteborg</div>
          <div>&copy;{new Date().getFullYear()} Företagets namn</div>

          <SocialFollow></SocialFollow>
        </div>
      </Paper>
    </ThemeProvider>
  );
};
export default Footer;

const mainFooter: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  width: "100vw",
  height: "5vh",
  justifyContent: "space-evenly",
  alignItems: "center",
  marginTop: "1em",
  marginBottom: "2em",
};
