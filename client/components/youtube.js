import React, {Component} from 'react';
import Navigation from '../containers/navigation.js';
import MusicPlayer from '../containers/spotify_player';
import VideoPlayer from '../containers/youtube_player';
import VideoPlayList from '../containers/youtube_playlist';
import SearchBar from '../containers/search_bar';

export default class Youtube extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <MusicPlayer />
        <SearchBar />
        <VideoPlayer />
        <VideoPlayList />
      </div>
    )
  }
}