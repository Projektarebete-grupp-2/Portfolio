import React from "react";
import "../style/SkillCard.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid, Paper, ThemeProvider, useTheme } from "@material-ui/core";
 
interface Props {
 skill: {
 fontAwesome: string;
 text: string;
 };
}
 
function SkillCard({ skill }: Props) {
 const theme = useTheme();
 return (
 <ThemeProvider theme={theme}>
 <Paper>
 <Grid className="skill-card-main">
 <Card elevation={1}>
 <CardContent className="skill-icon">
 <i className={skill.fontAwesome}></i>
 </CardContent>
 <CardContent className="skill-text">
 <Typography variant="subtitle1">{skill.text}</Typography>
 </CardContent>
 </Card>
 </Grid>
 </Paper>
 </ThemeProvider>
 );
}
 
export default SkillCard;