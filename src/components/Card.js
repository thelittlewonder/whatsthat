import React, { Component } from 'react';
import Sound from '../sound.svg';
import Copy from '../copy.svg';
import Toastify from 'toastify-js'


class Card extends Component {
  copyText = (e) => {
    const el = document.createElement("textarea"); 
    el.value = e.target.parentNode.parentNode.childNodes[2].innerHTML; 
    el.setAttribute("readonly", ""); 
    el.style.position = "absolute";
    el.style.left = "-9999px"; 
    document.body.appendChild(el); 
    const selected =
      document.getSelection().rangeCount > 0 
        ? document.getSelection().getRangeAt(0) 
        : false; 
    el.select(); 
    document.execCommand("copy"); 
    document.body.removeChild(el);
    if (selected) {
      // If a selection existed before copying
      document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
      document.getSelection().addRange(selected); // Restore the original selection
    }  
    //show toast
    Toastify({
      text: "Copied to Clipboard!",
      duration: 1000,
      gravity: "top",
      positionLeft: false, 
      className: 'toast',
      backgroundColor: "#333",
    }).showToast();
  }

  speakText = (e) => {
    if ('speechSynthesis' in window) {
      var msg = new SpeechSynthesisUtterance();
      msg.text = e.target.parentNode.parentNode.childNodes[2].innerHTML;
      msg.lang = e.target.parentNode.parentNode.lang;
      window.speechSynthesis.speak(msg);
    } else{
      Toastify({
        text: "Speech Synthesis Not Supported in your Browser :(",
        duration: 3000,
        gravity: "top",
        positionLeft: false, 
        className: 'toast',
        backgroundColor: "#EF5350",
      }).showToast();   
    }
  }

  render() {
    return (
      <div className="card" lang={this.props.code}>
        <h2>{this.props.language}</h2>
        <div className="divider"></div>
        <h3>{this.props.translated}</h3>
        <div className="actions">
          <img src={Sound} alt="Speak Translation" title="Speak" onClick={this.speakText}/>
          <img src={Copy} alt="Copy Translation" title="Copy to Clipboard" onClick={this.copyText}/>
        </div>
      </div>
    );
  }
}

export default Card;
