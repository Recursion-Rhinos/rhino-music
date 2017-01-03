import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/search_bar';
import SearchResults from '../containers/search_results_list';
import MusicPlayer from '../containers/spotify_player';
import NYTimes from '../containers/nytimes';

export default class App extends Component {
  render () {
  	// <SearchBar handler={fetch}/>
    return ( 
      <div>
       <SearchBar/>
       <MusicPlayer />
       <SearchResults />
       < NYTimes />
     </div>
    );
  }
}