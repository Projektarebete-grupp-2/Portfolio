import React from "react";
import "../../style/SkillCard.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

interface Props {
  skill: {
    fontAwesome: string;
    text: string;
  };
}

function SkillCard({ skill }: Props) {
  return (
      <Card className="skill-card-main">
        <CardContent className="skill-icon">
          <i className={skill.fontAwesome}></i>
        </CardContent>
        <CardContent className="skill-text">
          <Typography variant="subtitle1">{skill.text}</Typography>
        </CardContent>
      </Card>
  );
}

export default SkillCard;
