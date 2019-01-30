import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import DogList from './components/DogList';
class App extends Component {
  constructor(){
    super();
    this.state= {
    dogs: [],
    error: '',
    loading: true
  };
}
  fetchDogs = breed => {
    axios
    .get (`https://dog.ceo/api/breed/images`)
    .then(res => {
      this.setState({loading: false})
      console.log("Response:", Response);
    })
    .catch(err=> {
      console.log("Error:", err);
    })
  }
  render() {
    return (
      <div className="App">
       <h1> Welcome Doggilovers </h1>
       <SearchBar fetchDogs={this.fetchDogs}/>
       <h2> Doggos </h2>
       <DogList
       error={this.state.error}
       dogs={this.state.dogs}
       loading={this.state.loading}
       />

      </div>
    );
  }
}

export default App;
