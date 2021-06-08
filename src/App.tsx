
import React, { Fragment } from 'react';
import logo from './drpepper.png';
import Footer from './components/footer'
/* import ContactPage from './components/contactPage'; */
import Main from './components/main'
import SimplePortal from './components/portal';
import './App.css';


function App() {
  return (
    <Fragment>
      <Main />

        <SimplePortal></SimplePortal>
      <Footer></Footer>
    </Fragment>
  );

}

export default App;
