import React from "react";
import { teammembers } from "../data/data";
import TeamCard from "./TeamCard";
import "../style/Team.css";
import Grid from "@material-ui/core/Grid";
import { Paper, ThemeProvider, useTheme } from "@material-ui/core";

function Team() {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Grid className="team">
          <div className="inner">
            <Grid item className="title">
              <p>{teammembers.title}</p>
            </Grid>

            <Grid item className="team-cards">
              {teammembers.lists.map((list, i) => {
                return <TeamCard teammembers={list} key={i} />;
              })}
            </Grid>
          </div>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}
export default Team;
