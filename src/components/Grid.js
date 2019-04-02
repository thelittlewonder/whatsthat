import React, { Component } from 'react';
import '../App.scss';
import Card from './Card';

class Grid extends Component {
  render() {
    return (
      <div className="grid">
          {this.props.items.map(el => <Card language={el.languageWord} translated={el.translation} code={el.languageCode} key={el.id}/>)} 
      </div>
    );
  }
}

export default Grid;
