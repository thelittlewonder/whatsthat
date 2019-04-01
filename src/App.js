import React, { Component } from 'react';
import Search from './components/Search';
import Header from './components/Header';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Search/>
      </div>
    );
  }
}

export default App;
