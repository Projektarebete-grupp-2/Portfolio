import React from "react";
import QuestionList from "./QuestionList";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Switch } from "@material-ui/core";


const useStyles = makeStyles({
  spacingDiv: {
    backgroundColor: "green",
    marginTop: "7em",
  },
});

function QuestionWrapper() {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid
        className={classes.spacingDiv}
        container
        direction="row"
        justify="flex-end"
      ></Grid>

      <QuestionList />
    </Grid>
  );
}

export default QuestionWrapper;
