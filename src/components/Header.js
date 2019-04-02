import React, { Component } from 'react';
import Logo from '../whatsthatlogo.svg';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="top"></div>
        <div className="logo">
          <a href="."><img src={Logo} alt="WhatsThat"/></a>
        </div>
      </div>
    );
  }
}

export default Header;
