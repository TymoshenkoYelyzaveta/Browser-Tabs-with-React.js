import React, { Component } from 'react';
import './App.css';

class Tab extends Component {
  constructor(props) {
    super();
    this.state = {
      highlightStyle: { left: 0, opacity: 0 },
    };
  }

  moveHightlight = (e) => {
    //update hightlight style to move highlight
    this.setState({
      highlightStyle: { left: e.nativeEvent.layerX - 150 },
    });
  };

  removeHighlight = (e) => {
    this.setState({
      highlightStyle: { opacity: 0, left: e.nativeEvent.layerX - 150 },
    });
  };

  render() {
    return (
      <div
        className='browser__tab'
        onMouseMove={this.moveHightlight}
        onMouseOut={this.removeHighlight}
      >
        <div className='highlight' style={this.state.highlightStyle} />
        <a>{this.props.link}</a>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Browser App</h1>
        <div className='browser'>
          <div className='browser__tabs'>
            <Tab link='Home' />
            <Tab link='About' />
            <Tab link='Features' />
          </div>

          <div className='browser__viewport'>Pages Go Here</div>
        </div>
      </div>
    );
  }
}

export default App;
