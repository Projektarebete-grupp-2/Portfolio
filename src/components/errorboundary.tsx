import { Button } from "@material-ui/core";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./main";
import { CSSProperties } from "@material-ui/styles";
import Typical from "react-typical";
import Typography from "@material-ui/core/Typography";

interface Props {
  errorMsg: String;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }
  reloadPage = () => {
    window.URL = window.URL;
  };

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <Typography style={errormsgstyle} variant="h4">
            &nbsp;
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "error.",
                1000,
                "error..",
                1000,
                "error...",
                1000,
                "error....",
                1000,
              ]}
            />
            {this.props.errorMsg}
          </Typography>

          <Route path="" exact component={Main}></Route>
        </div>
      );
    }

    return this.props.children;
  }
}
const errormsgstyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "#282c34",
};
