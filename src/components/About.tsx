// Assets
import aboutResumeIllustration from "./flying-about-resume-illustration.svg";
import waveAboutResume from "./wave-about-resume.svg";
import waveAboutResumeDown from "./wave-about-resume-down.svg";
import React, { CSSProperties } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Paper, ThemeProvider, useTheme } from "@material-ui/core";





export default function AboutResume(): JSX.Element {
  const theme = useTheme()
  return (
    <ThemeProvider theme={theme}>
    <Paper>
    <Container className="aboutUs">
      <img className="waveImage" src={waveAboutResume} alt="about" />
      <Grid container spacing={3}>

        <Grid item xs={6}>
          <Grid className="container">
            <Typography variant="h2" className="title">
              About US
            </Typography>
          </Grid>

          <Typography variant="subtitle2" className="title" gutterBottom>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vitae,
            expedita at consequatur numquam assumenda officia. Dignissimos,
            reprehenderit magni obcaecati veniam atque tempore eos cupiditate
            soluta doloremque, quod alias quidem?
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <img src={aboutResumeIllustration} alt="" style={leftImage} />
        </Grid>
      </Grid>

      <img className="waveDown" src={waveAboutResumeDown} alt="" />
    </Container>
    </Paper>
    </ThemeProvider>
  );
}
const leftImage: CSSProperties = {
  width: "300px",
  display: "flex",
  margin: "0 auto",
  marginTop: "1 rem",
};
