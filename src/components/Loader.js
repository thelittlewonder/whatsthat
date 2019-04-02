import React, { Component } from 'react';

class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <div className="cube-wrapper">
          <div className="cube-folding">
            <span className="leaf1"></span>
            <span className="leaf2"></span>
            <span className="leaf3"></span>
            <span className="leaf4"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Loader;
