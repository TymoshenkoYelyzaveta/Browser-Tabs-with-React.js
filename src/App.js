import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Browser App</h1>
        <div className='browser'>
          <div className='browser__tabs'>
            <div className='browser__tab'>
              <a>Home</a>
            </div>
            <div className='browser__tab'>
              <a>About</a>
            </div>
            <div className='browser__tab'>
              <a>Features</a>
            </div>
          </div>

          <div className='browser__viewport'>Pages Go Here</div>
        </div>
      </div>
    );
  }
}

export default App;
