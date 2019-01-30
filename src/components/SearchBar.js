import React from 'react';


class SearchBar extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <input
                type= 'text'
                name= 'breed'
                ></input>
                <button> Find Dogs </button>
            </div>
        );
    }
}

export default SearchBar;