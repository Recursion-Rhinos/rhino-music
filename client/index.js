import lodash from 'lodash'
import React, { Component } from 'react'; //find node mod named 'react' and put it into var React
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar'
// import SearchResults from './components/search_results'
// import RecList from './components/rec_list'
// import SongItem from './components/song_item'

class App extends React.Component {
	
  render () {
    return <div>
    		 <SearchBar />
    	   </div>
  }
}

ReactDOM.render( < App / > , document.querySelector('.container'))
