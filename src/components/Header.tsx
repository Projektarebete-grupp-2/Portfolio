import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import HelloWorld from "./HelloWorld";

interface Props {
  project?: string[];
  github?: string;
  name?: string;
  description?: string;
}

interface State {}
class Header extends Component<Props, State> {
  render() {
    if (!this.props) return null;

    const project = this.props.project;
    const github = this.props.github;
    const name = this.props.name;
    const description = this.props.description;

    return (
      <div>
        <ParticlesBg type="circle" bg={true} />
      </div>
    );
  }
}

export default Header;
