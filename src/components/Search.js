import React, { Component } from 'react';
import '../App.scss';

class Search extends Component {
  render() {
    return (
      <div className="search">
          <form>
            <input type="text" placeholder="Type a word..."></input>
            <button>Translate →</button>
          </form>
      </div>
    );
  }
}

export default Search;
