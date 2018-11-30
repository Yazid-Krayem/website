import {Route} from "react-router-dom";
import { BrowserRouter, Switch} from "react-router-dom";
import React from 'react';
import Contact from './components/contact';
import Blog from './components/Blogd';
import Home from "./components/Home";


 const Router = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Blog" component={Blog} />
        </Switch>
    </BrowserRouter>
  )
}

export default Router
