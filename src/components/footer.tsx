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
          <div style={leftFooter}>
            {/* missing navbar import */}
            <div style={leftFooterDiv}>Postgatan 411 06 Göteborg</div>
            {/* Här kan menu bli importerad  istället för diven nedan. */}
            <div style={leftFooterDiv}>Postgatan 411 06 Göteborg</div>
          </div>
          <div style={rightFooter}>
            <SocialFollow></SocialFollow>
            <div>
              <p>&copy;{new Date().getFullYear()} Företagets namn</p>
            </div>
          </div>
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
  height: "15vh",
  /* backgroundColor: 'green', */

  color: "white",
};

const leftFooter: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
  height: "100%",
  flex: "1",
};
const leftFooterDiv: CSSProperties = {
  margin: "0.5em",
};
const rightFooter: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flex: "1",
  width: "50%",
  height: "100%",
};
