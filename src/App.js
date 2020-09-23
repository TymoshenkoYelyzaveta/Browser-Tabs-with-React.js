import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Tab from './components/Tab';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Features from './pages/Features.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <h1>Browser App</h1>
          <div className='browser'>
            <div className='browser__tabs'>
              <Tab>
                <Link className='link' to='/'>
                  Home
                </Link>
              </Tab>
              <Tab>
                <Link className='link' to='/about'>
                  About
                </Link>
              </Tab>
              <Tab>
                <Link className='link' to='/features'>
                  Features
                </Link>
              </Tab>
            </div>

            <div className='browser__viewport'>
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
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
