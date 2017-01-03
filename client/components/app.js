import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/search_bar';
import SearchResults from '../containers/search_results_list';
import MusicPlayer from '../containers/spotify_player';

export default class App extends Component {
  render () {
    return ( 
      <div>
       <SearchBar />
       <MusicPlayer />
       <SearchResults />
     </div>
    );
  }
}