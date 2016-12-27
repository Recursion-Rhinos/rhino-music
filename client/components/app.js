import React from 'react';
import { Component } from 'react';
import SearchBar from '../containers/search_bar';
import SearchResults from '../containers/search_results_list';


export default class App extends Component {
render () {
   return ( 
          <div>
            <SearchBar />
            <SearchResults />
          </div>
    );
  }
}