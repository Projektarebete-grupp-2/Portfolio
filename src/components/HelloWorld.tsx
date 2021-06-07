import React from "react";
import Typical from "react-typical";
import "../style/Helloworld.css";
import { greeting } from "../data/data";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

function HelloWorld() {
  const Fade: any = require("react-reveal/Fade");
  return (
    <Fade bottom duration={1000}>
     <Grid container className="sectionw">
        <Grid item className="inner">
          <div className="text-title">
            {greeting.note}&nbsp;
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
  );
}
export default HelloWorld;
