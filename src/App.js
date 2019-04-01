import React, { Component } from 'react';
import Search from './components/Search';
import Header from './components/Header';
import EmptyState from './components/EmptyState';
import Footer from './components/Footer';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Search/>
          <EmptyState/>
          <Footer/>
      </div>
    );
  }
}

export default App;
