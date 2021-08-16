
import React, { Fragment } from 'react';
import Main from './components/main'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Blogpage from "./components/Blogpage";
import Article from './components/Article';
import ContactPage from './components/contactPage'
import Portfolio from "./components/Upcoming";
import Work from "./components/Work";
import BlogWrapper from "./components/BlogWrapper";



function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/blog" exact component={BlogWrapper} />
          <Route path="/blog/:id" component={Article} />
          <Route path="/contact" component={ContactPage} />
          <Route component={Portfolio} path="/portfolio" exact />
          <Route component={Work} path="/portfolio/:id" exact />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );

}

export default App;
