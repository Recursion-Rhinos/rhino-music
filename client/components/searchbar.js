import React, { Component } from 'react';
import 'whatwg-fetch'
// import Router {router, browserHistory} from 'react-router';
// import Routes from './routes';


class SearchBar extends Component {

	constructor(props) {
		super(props);
		
		this.state = { value: '' }

		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
      event.preventDefault();
      let inputVal = this.state.value;

      fetch('/api/search', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              inputVal
          })
      }).then(function(resp) {
        resp.json().then(function(data){
         	return data
         })

      })
  }



render() {

	return (

	<div>
		<form onSubmit={this.handleSubmit}>
	 	<input  
	 	value={this.state.value} 
	 	onChange={this.handleChange}/>
	 	</form>
	</div>

		)
	}
}


export default SearchBar;