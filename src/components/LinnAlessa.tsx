import React, { Component } from 'react';


interface TitleProps {
  title: string;
  subtitle: string;
}

class LinnAlessa extends Component<TitleProps> {
  render() {
    const { title, subtitle, children } = this.props;
    return (
        <div className="alessa">
      <>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <div>{children}</div>
      </>
      </div>
    );
  }
}

export default LinnAlessa;