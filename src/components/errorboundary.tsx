import React, { Component } from "react";

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
  /* här ska vi lägga in React router grejs istället för knapp med reload */
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>{this.props.errorMsg}</h1>
          <b>
            <a href="" onClick={this.reloadPage}>
              Reload
            </a>
          </b>
        </div>
      );
    }

    return this.props.children;
  }
}
