import _ from 'lodash'
import React, { Component } from 'react'; //find node mod named 'react' and put it into var React
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
import SearchResults from './components/search_results'

class App extends Component { // this app will be a factory that makes components. Insantiates component before rendering to the DOM.
    constructor(props) {
        super(props);

        this.state = { 
        	 
        }

}

ReactDOM.render( < App / > , document.querySelector('.container'))