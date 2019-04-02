import React, { Component } from 'react';
import '../App.scss';

class Search extends Component {
  search(e) {
    e.preventDefault();
    console.log('bajaya');
  }
  render() {
    return (
      <div className="search">
        <p>{this.query}</p>
          <form onSubmit={this.search.bind(this)}>
            <input type="text" placeholder="Type a word..."></input>
            <button type="submit">Translate →</button>
          </form>
      </div>
    );
  }
}

export default Search;
