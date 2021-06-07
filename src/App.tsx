
import React, { Fragment } from 'react';
import logo from './drpepper.png';
import Footer from './components/footer'
import ContactPage from './components/contactPage';
import Main from './components/main'
import './App.css';


function App() {
  return (
    <Fragment>
      <Main />
        <ContactPage></ContactPage>
      <Footer></Footer>
    </Fragment>
  );

}

export default App;
