import React, { Component } from 'react';
import '../App.scss';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
       <p>View on <a href="http://github.com/littlewonder/whatsthat" target="_blank">GitHub↗</a>  ·  Put together by <a href="https://twitter.com/lilwonderspeaks" target="_blank">thelittlewonder↗</a></p>
      </div>
    );
  }
}

export default Footer;
