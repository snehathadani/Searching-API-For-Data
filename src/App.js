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
    loading: false
  };
}
  fetchDogs = breed => {
    this.setState({loading:true})
    axios

    .get (`https://dog.ceo/api/breed/${breed}/images`)
    .then(response => {
      this.setState({
        loading: false,
        dogs:response.data.message,
        error:''
      });
      console.log("Response:", response);
      //In order to pass the response to the image tag in DogList set the state
     // this.setState({dogs:response.data.message, loading:false});
    })
    .catch(err=> {
      this.setState({error:"Dogs nor found", dogs:[], loading:false});
    });
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
