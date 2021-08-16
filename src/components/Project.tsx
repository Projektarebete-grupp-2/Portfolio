import React from "react";
import "../style/Project.css";
import { projects } from "../data/data";
import ProjectCard from "./ProjectCard";
import Grid from "@material-ui/core/Grid";
import { Paper, ThemeProvider, useTheme } from "@material-ui/core";

function Project() {  
  const theme = useTheme()

  return (
        <ThemeProvider theme={theme}>
    <Paper>
    <Grid className="section--project" id="project">
      <Grid item className="inner">
        <div className="project-title">
          <p>{projects.title}</p>
        </div>

        <Grid item className="project-cards">
          {projects.lists.map((list, i) => {
            return <ProjectCard project={list} key={i} />;
          })}
        </Grid>
      </Grid>
    </Grid>
  </Paper>
    </ThemeProvider>
  );
}
export default Project;

