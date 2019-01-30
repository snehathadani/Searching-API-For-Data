import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchBar from './components/SearchBar';
class App extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div className="App">
       <h1> Welcome Doggilovers </h1>
       <SearchBar/>
      </div>
    );
  }
}

export default App;
