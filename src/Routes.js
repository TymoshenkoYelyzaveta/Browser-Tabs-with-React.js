import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Features from './pages/Features.js';
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/features'>
          <Features />
        </Route>
        <Route path='/' exact>
          <Home />
        </Route>
      </Switch>
    );
  }
}

export default Routes;
