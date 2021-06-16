import React from "react";
import Portal from "@material-ui/core/Portal";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import TransitionsModal from "./modal";
import Button from "@material-ui/core/Button";
import { Paper, ThemeProvider, Typography, useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(1),
      margin: theme.spacing(1, 0),

      display: "flex",
      justifyContent: "center",
    },
    buttonStyle: {
      padding: 0,
    },
  })
);

export default function SimplePortal() {
  const classes = useStyles();
  const [show, setShow] = React.useState(false);
  const container = React.useRef(null);

  const handleClick = () => {
    setShow(!show);
  };

  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <div className={classes.container}>
          <Button
            className={classes.buttonStyle}
            color="secondary"
            type="button"
            onClick={handleClick}
          >
            button
          </Button>
          {show ? (
            <Portal container={container.current}>
              <TransitionsModal></TransitionsModal>
            </Portal>
          ) : null}
        </div>
        <div className={classes.container} ref={container} />
      </Paper>
    </ThemeProvider>
  );
}
