import React from "react";
import "../style/TeamCard.css";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid, Paper, ThemeProvider, useTheme } from "@material-ui/core";

interface Props {
  teammembers: {
    role: string;
    name: string;
    skills: string | number;
  };
}
function TeamCard({ teammembers }: Props) {
  const Fade = require("react-reveal/Fade");
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Fade duration={800} bottom>
          <Grid className="expcard-main">
            <Card elevation={1}>
              <CardHeader title={teammembers.name} />
              <CardContent>
                <Typography variant="h5">{teammembers.role}</Typography>
                <Typography variant="body2">{teammembers.skills}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Fade>
      </Paper>
    </ThemeProvider>
  );
}

export default TeamCard;
