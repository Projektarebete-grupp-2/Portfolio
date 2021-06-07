import React from "react";
import "../style/skill.css";
import { skills } from "../data/data";
import SkillCard from "../components/Cards/SkillsCard";
import Grid from "@material-ui/core/Grid";

function Skills() {
  return (
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
  );
}
export default Skills;
