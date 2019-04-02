import React, { Component } from 'react';
import Search from './components/Search';
import Header from './components/Header';
import Grid from './components/Grid';
import EmptyState from './components/EmptyState';
import Footer from './components/Footer';
import './App.scss';

class App extends Component {
  state = {
      translatedWords : [
      {
        id:1,
        languageCode:'fr',
        languageWord:'French',
        translation:''
      },
      {
        id:2,
        languageCode:'es',
        languageWord:'Spanish',
        translation:''
      },
      {
        id:3,
        languageCode:'la',
        languageWord:'Latin',
        translation:''
      },
      {
        id:4,
        languageCode:'it',
        languageWord:'Italian',
        translation:''
      },
      {
        id:5,
        languageCode:'de',
        languageWord:'German',
        translation:''
      },
      {
        id:6,
        languageCode:'nl',
        languageWord:'Dutch',
        translation:''
      },
      {
        id:7,
        languageCode:'zu',
        languageWord:'Zulu',
        translation:''
      },
      {
        id:8,
        languageCode:'ru',
        languageWord:'Russian',
        translation:''
      },
      {
        id:9,
        languageCode:'pt',
        languageWord:'Portugese',
        translation:''
      },
    ],
    query: ''
  }

  render() {
    return (
      <div className="App">
          <Header/>
          <Search value={this.state.query}/>
          <Grid items={this.state.translatedWords}/>
          <Footer/>
      </div>
    );
  }
}

export default App;
