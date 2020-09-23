import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        {this.props.children}
      </div>
    );
  }
}

export default Tab;
