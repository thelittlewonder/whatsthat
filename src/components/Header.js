import React, { Component } from 'react';
import '../App.scss';
import Logo from '../whatsthatlogo.svg';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="top"></div>
        <div className="logo">
          <img src={Logo} alt="WhatsThat"/>
        </div>
      </div>
    );
  }
}

export default Header;
