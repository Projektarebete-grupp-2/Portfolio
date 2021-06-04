import React, { Fragment } from 'react';
import logo from './drpepper.png';
import Footer from './components/footer'
import './App.css';

function App() {
  return (
    <Fragment>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
