
import React, { Fragment } from 'react';
import Main from './components/main'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Blogpage from "./components/Blogpage";
import Article from './components/Article';
import ContactPage from './components/contactPage'




function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/blog" exact component={Blogpage} />

          <Route path="/blog/:id" component={Article} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );

}

export default App;
