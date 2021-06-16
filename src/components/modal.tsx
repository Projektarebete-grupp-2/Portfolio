import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ContactPage from "./contactPage";
import { Paper, useTheme } from "@material-ui/core";
import ErrorBoundary from "./errorboundary";
import { useRouteMatch } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      borderRadius: "20px",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  let { path, url } = useRouteMatch();
  console.log(path);
  console.log(url);
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}></div>
          </Fade>
        </Modal>
      </Paper>
    </ThemeProvider>
  );
}
