import React from "react";
import Typical from "react-typical";
import "../style/Helloworld.css";
import { greeting } from "../data/data";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Paper, ThemeProvider } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

function HelloWorld() {
  const Fade: any = require("react-reveal/Fade");
  const theme = useTheme()
  return (
    <ThemeProvider theme={theme}>
    <Paper>
     

    <Fade bottom duration={1000}>
     <Grid container className="sectionw">
        <Grid item className="inner">

          <div className="text-title">
            <Typography variant="h5">{greeting.note}&nbsp;</Typography>
            <span className="emoji">👋</span>
          </div>
             <div className="skills">
            <span>
              <Typography variant="h5">
                We do your &nbsp;
                <Typical
                  loop={Infinity}
                  wrapper="b"
                  steps={[
                    "🖥 Web Design",
                    1000,
                    "🖇 Logo Design",
                    1000,
                    "🎨 UI Design",
                    1000,
                  ]}
                />
              </Typography>
            </span>
          </div>
        </Grid>
      </Grid>
    </Fade>
   
    </Paper>

    </ThemeProvider>

   
  );
}
export default HelloWorld;
