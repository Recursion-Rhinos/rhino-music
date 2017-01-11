import React, {Component} from 'react';
import Navigation from '../containers/navigation.js';
import MusicPlayer from '../containers/spotify_player';
import NYTimes from '../containers/nytimes.js';
import SearchBar from '../containers/search_bar'

export default class News extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <MusicPlayer />
        <SearchBar />   
        <NYTimes /> 
      </div>
    )
  }
}