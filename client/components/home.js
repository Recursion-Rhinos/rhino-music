import React, {Component} from 'react';
import {Link} from 'react-router';
import Navigation from '../containers/navigation'
import SearchBar from '../containers/search_bar';
import SearchResults from '../containers/search_results_list';
import MusicPlayer from '../containers/spotify_player';
import NYTimes from '../containers/nytimes';
import VideoPlayList from '../containers/youtube_playlist';
import UserPlayLists from '../containers/myMusic.js';
import VideoPlayer from '../containers/youtube_player';
import EventsList from '../containers/events_list.js';


export default class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <MusicPlayer />
        <SearchBar />
        <SearchResults className="animated fadeInDown" /> 	 	 	 	
      </div>
    );
  }
}