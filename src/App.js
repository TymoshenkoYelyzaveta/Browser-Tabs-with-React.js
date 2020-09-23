import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Tabs from './components/Tabs';
import Routes from './Routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <h1>Browser App</h1>
          <div className='browser'>
            <Tabs />
            <div className='browser__viewport'>
              <Routes />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
