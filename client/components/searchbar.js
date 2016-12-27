import React, { Component } from 'react';

// import Router {router, browserHistory} from 'react-router';
// import Routes from './routes';


class SearchBar extends Component {

	constructor(props) {
		super(props);
		
		this.state = { term: ''};

		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
    	
	}


  handleChange(event) {
    this.setState({term: event.target.value});
  }

  handleSubmit(event) {
      event.preventDefault();
      console.log("THIS PROPS", this.props)
      console.log("TERM", this.state.term)
    this.props.onSearchTermChange(this.state.term)
  }

render() {

	return (

	<div>
		<form onSubmit={this.handleSubmit}>
	 	<input  
	 	value={this.state.term} 
	 	onChange={this.handleChange}/>
	 	</form>

	</div>


		)
	}


}


export default SearchBar;