import React, { Component } from 'react';
import Search from './components/Search';
import Header from './components/Header';
import EmptyState from './components/EmptyState';
import Card from './components/Card';
import Footer from './components/Footer';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Search/>
          <div className="grid">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
          <Footer/>
      </div>
    );
  }
}

export default App;
