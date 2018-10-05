import React, { Component } from 'react';
import './App.css';
import d from './data.js';
import Cards from './card';


class App extends Component {
  state = {
    articles: d
  }


  render() {
    return (
        <div className="Card-column">
          <Cards articles={this.state.articles}/>        
        </div> 
    );
  }
}

export default App;
