import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Tab from './Tab';

class Tabs extends Component {
  render() {
    return (
      <div className='browser__tabs'>
        <Tab>
          <NavLink activeClassName='isActive' className='link' exact to='/'>
            Home
          </NavLink>
        </Tab>
        <Tab>
          <NavLink activeClassName='isActive' className='link' to='/about'>
            About
          </NavLink>
        </Tab>
        <Tab>
          <NavLink activeClassName='isActive' className='link' to='/features'>
            Features
          </NavLink>
        </Tab>
      </div>
    );
  }
}

export default Tabs;
