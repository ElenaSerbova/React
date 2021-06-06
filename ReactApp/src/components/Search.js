import React, { Component } from 'react';

class Search extends Component{
    render(){

        console.log(this.props);

        let searchStr = this.props.location.search;
        let params = new URLSearchParams(searchStr);
    
        let name = params.get("name"); // is the string "Jonathan"
        let id = parseInt(params.get("id"), 10); 

        return (
            <div>
                <h2>Search string:</h2>
                <p>name: {name}</p>
                <p>id: {id}</p>
            </div>
        );
    }
} 

export default Search;
