import React, { Component } from "react";
import ParticlesBg from "particles-bg";


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


    return (
      <div>
        <ParticlesBg type="circle" bg={true} />
      </div>
    );
  }
}

export default Header;
