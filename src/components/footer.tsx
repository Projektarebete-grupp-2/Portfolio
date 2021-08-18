import "../style/footer.css";
import {
  Button,
  Paper,
  ThemeProvider,
  Typography,
  useTheme,
} from "@material-ui/core";
import React, { CSSProperties, Fragment, useState } from "react";
import SocialFollow from "./socialmedia";

interface Props {}

const Footer = (props: Props) => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <div className="mainFooter">
          <Typography variant="subtitle1">
            Göteborgsgatan 1111 Göteborg
          </Typography>
          <Typography variant="subtitle1">
            &copy;{new Date().getFullYear()} Företagets namn
          </Typography>
          <SocialFollow></SocialFollow>
        </div>
      </Paper>
    </ThemeProvider>
  );
};
export default Footer;
