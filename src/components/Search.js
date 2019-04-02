import React, { Component } from 'react';
import '../App.scss';

class Search extends Component {
  state = {
    query: ''
  }
  search(e) {
    e.preventDefault();
    this.props.translate(this.state.query);
  }
  handleChange = (e) => this.setState({[e.target.name]:e.target.value});
  render() {
    return (
      <div className="search">
        <p>{this.query}</p>
          <form onSubmit={this.search.bind(this)}>
            <input type="text" required placeholder="Type a word..." name="query" value={this.state.query} onChange={this.handleChange}></input>
            <button type="submit">Translate →</button>
          </form>
      </div>
    );
  }
}

export default Search;
