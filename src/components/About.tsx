// Assets
import aboutResumeIllustration from "./flying-about-resume-illustration.svg";
import waveAboutResume from "./wave-about-resume.svg";
import waveAboutResumeDown from "./wave-about-resume-down.svg";
import React, { CSSProperties } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";




export default function AboutResume(): JSX.Element {
  return (
    <Container className="aboutUs">
      <img className="waveImage" src={waveAboutResume} alt="about" />
      <Grid className="aboutResumeInfo">
        <Grid className="container">
          <Typography variant="h2" className="title">
            About US
          </Typography>

        </Grid>
        <Grid className="infoText">
          <Typography variant="subtitle2" className="title" gutterBottom>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vitae,
            expedita at consequatur numquam assumenda officia. Dignissimos,
            reprehenderit magni obcaecati veniam atque tempore eos cupiditate
            soluta doloremque, quod alias quidem?
          </Typography>
          <a href="/">
            <i className="fas fa-cloud-download-alt" />
            More about us
          </a>
        </Grid>
        <img src={aboutResumeIllustration} alt="" style={leftImage} />
      </Grid>

      <img className="waveDown" src={waveAboutResumeDown} alt="" />
    </Container>
  );
}
const leftImage: CSSProperties = {
  width: "300px",
  display: "flex",
  margin: "0 auto",
  marginTop: "1 rem",
};
