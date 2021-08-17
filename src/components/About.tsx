// Assets
import aboutResumeIllustration from "./flying-about-resume-illustration.svg";
import waveAboutResume from "./wave-about-resume.svg";
import waveAboutResumeDown from "./wave-about-resume-down.svg";
import React, { CSSProperties } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Button, Paper, ThemeProvider, useTheme } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

export default function AboutResume(): JSX.Element {
  let { path, url } = useRouteMatch();

  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100vh" }}>
        <Container className="aboutUs">
          <img className="waveImage" src={waveAboutResume} alt="about" />
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Grid className="container">
                <Typography variant="h2" className="title">
                  About us
                </Typography>
              </Grid>
              {/* Content */}
              <Switch>
                <Route exact path="/">
                  <Typography
                    variant="subtitle2"
                    className="title"
                    gutterBottom
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Illo, ducimus quibusdam. Dolorum omnis, id magni nulla
                    recusandae deleniti, cupiditate quas doloremque labore
                    temporibus neque ex animi totam nesciunt distinctio aperiam.
                    <Link style={{ color: "white" }} to="About/Detail">
                      More Info
                    </Link>
                  </Typography>
                </Route>
                <Route path="/About/Detail">
                  <h1>More detail page</h1>
                </Route>
                <Route path="/About">
                  <Typography
                    variant="subtitle2"
                    className="title"
                    gutterBottom
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Illo, ducimus quibusdam. Dolorum omnis, id magni nulla
                    recusandae deleniti, cupiditate quas doloremque labore
                    temporibus neque ex animi totam nesciunt distinctio aperiam.
                    <Link style={{ color: "white" }} to={`${url}/Detail`}>
                      More Info
                    </Link>
                  </Typography>
                </Route>
              </Switch>
              {/* Content */}
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
  width: "150px",
  display: "flex",
  margin: "0 auto",
  marginTop: "1 rem",
};
