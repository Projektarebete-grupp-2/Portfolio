import React from 'react';
import "../../style/TeamCard.css";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

interface Props {
  teammembers: {
    role: string;
    name: string;
    skills: string | number;
  };
}
function TeamCard({ teammembers }: Props) {
  const Fade = require("react-reveal/Fade");
  return (
    <Fade duration={800} bottom>
      <div className="expcard-main">
        <div className="inner">
          <Card elevation={1}>
            <CardHeader title={teammembers.name} />
            <CardContent>
              <Typography variant="h5">{teammembers.role}</Typography>
              <Typography variant="body2">{teammembers.skills}</Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </Fade>
  );
}

export default TeamCard;