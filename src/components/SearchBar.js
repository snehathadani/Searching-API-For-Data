import React from 'react';


class SearchBar extends React.Component{
    constructor(props ){
        super(props);
        this.state ={
            breed: ""
        };
    }
    inputChange = e=> {
        this.setState ({[e.target.name]:e.target.value});
    }
    
    SearchForBreed = e => {
        e.preventDefault();
        this.props.fetchDogs(this.state.breed);
        //this.setState({breed: ""});
    };

    render(){
        return(
            <div>
                <input
                type= 'text'
                name= 'breed'
                value={this.state.breed}
                onChange={this.inputChange}
                />
                <button onClick={this.SearchForBreed}> Find Dogs </button>
            </div>
        );
    }
}

export default SearchBar;