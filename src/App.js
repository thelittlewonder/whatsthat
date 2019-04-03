import React, { Component } from 'react';
import Search from './components/Search';
import Header from './components/Header';
import Grid from './components/Grid';
import Loader from './components/Loader';
import EmptyState from './components/EmptyState';
import Footer from './components/Footer';
const request = require('request');

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
        languageCode:'de',
        languageWord:'German',
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
        languageCode:'es',
        languageWord:'Spanish',
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
        languageCode:'el',
        languageWord:'Greek',
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
      }
    ],
    showResults: false,
    firstTime: true
  }

  renderLoader = () => {
    return (
      <Loader/>
    );
  }

  renderResults = () => {
    return(
      <Grid items={this.state.translatedWords}/>
    );
  }

  

  renderContent = () => {
    return(
       !this.state.showResults  ? <Grid items={this.state.translatedWords}/> : <Loader/>
    )
  }

  renderFirstTime = () => {
    return (
      <EmptyState/>
    );
  }
  
  translate = (query) => {
    this.setState({showResults: false});
    this.setState({firstTime: false});
    this.state.translatedWords.forEach(lang => {
      let reqUrl = 'https://wutsthat.herokuapp.com/?q='+query+'&lang='+lang.languageCode;
      request(reqUrl, (error, response, body) => {
        let a = this.state.translatedWords;
        let obj = a.find(obj => obj.languageCode === lang.languageCode);
        obj.translation  = body;
        this.setState({translatedWords: a});
        //this.setState({showResults: true});
      });
    });
  }

  render() {
    return ( 
      <div className="App">
          <Header/>
          <Search translate={this.translate}/>
          { this.state.firstTime ? this.renderFirstTime() : this.renderContent()}
          <Footer/>
      </div>
    );
  }
}

export default App;
