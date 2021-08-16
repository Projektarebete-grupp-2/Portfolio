import React from "react";
import "../style/skill.css";
import { skills } from "../data/data";
import SkillCard from "../components/SkillsCard";
import Grid from "@material-ui/core/Grid";
import { Paper, ThemeProvider, useTheme } from "@material-ui/core";

function Skills() {
  const theme = useTheme()
  return (
    <ThemeProvider theme={theme}>
    <Paper>
    <Grid className="skills">
      <div className="divWrapper">
          <div className="wrapper">
            <Grid item className="title">
              <p>{skills.title}</p>
            </Grid>

            <Grid item className="skill-cards">
              {skills.lists.map((list, i) => (
                <SkillCard skill={list} key={i} />
              ))}
            </Grid>
          </div>
      </div>
    </Grid>
    </Paper>
    </ThemeProvider>
  );
}
export default Skills;
