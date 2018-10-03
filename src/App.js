import React, { Component } from 'react';
import './App.css';
import d from './data.js';
import Cards from './card';
import axios from 'axios';


class App extends Component {
  state = {
    articles: d
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const articles = res.data;
        this.setState({ articles });
      })
  }

  render() {
    return (
        <div className="Card-column">
          <Cards articles={this.state.articles}/>
          <div>
            <ul>
              {this.state.articles.map(person => <li>{person.name}</li>)}
            </ul>
          </div>
          
        </div> 
    );
  }
}

export default App;
