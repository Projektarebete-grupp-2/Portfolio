import React, { Component, useState } from 'react';


function LinnState() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me to count!
      </button>
    </div>
  );
}

/*interface TitleProps {
  title: string;
  subtitle: string;
}

class LinnState extends Component<TitleProps> {
  render() {
    const { title, subtitle, children } = this.props;
    return (
      <>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <div>{children}</div>
      </>
    );
  }
}*/

export default LinnState;



/*import React, { useState } from 'react';

function LinnState() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}*/