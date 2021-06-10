import React from "react";
import "./Project.css";
import { projects } from "../data/data";
import ProjectCard from "./Cards/ProjectCard";
import Grid from "@material-ui/core/Grid";
import { Container } from '@material-ui/core';

function Project() {
  return (
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
  );
}
export default Project;

