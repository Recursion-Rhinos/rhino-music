import React, { Component } from 'react';


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
    console.log(this.state.value)
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