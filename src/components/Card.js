import React, { Component } from 'react';
import '../App.scss';
import Sound from '../sound.svg';
import Copy from '../copy.svg';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <h2>{this.props.language}</h2>
        <div className="divider"></div>
        <h3>{this.props.translated}</h3>
        <div className="actions">
          <img src={Sound} alt="Speak Translation" title="Speak"/>
          <img src={Copy} alt="Copy Translation" title="Copy to Clipboard"/>
        </div>
      </div>
    );
  }
}

export default Card;
