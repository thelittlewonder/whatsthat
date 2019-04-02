import React, { Component } from 'react';
import Illustration from '../emptystate.svg';

class EmptyState extends Component {
  render() {
    return (
      <div className="emptystate">
          <img src={Illustration} alt="WhatsThat - Enter a word to continue"/>
      </div>
    );
  }
}

export default EmptyState;
