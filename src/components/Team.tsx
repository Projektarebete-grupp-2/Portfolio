import React from "react";
import { teammembers } from "../data/data";
import TeamCard from "../components/Cards/TeamCard";
import "../style/Team.css";
import Grid from "@material-ui/core/Grid";





function Team() {
  return (
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
  );
}
export default Team;
