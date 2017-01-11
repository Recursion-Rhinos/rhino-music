import React from 'react';
import { Component } from 'react';

// import Navigation from '../containers/navigation'
// import SearchBar from '../containers/search_bar';
// import SearchResults from '../containers/search_results_list';
// import MusicPlayer from '../containers/spotify_player';
// import NYTimes from '../containers/nytimes';
// import VideoPlaylist from '../containers/youtube_playlist';
// import UserPlaylists from '../containers/myMusic.js';
// import VideoPlayer from '../containers/youtube_player';
// import EventsList from '../containers/events_list.js';


export default class App extends Component {
  render () {
    // return ( 
    //   <div>
    //    <Navigation />
    //    <SearchBar/>
    //    <MuscPlayer />
    //    <SearchResults />
    //    <NYTimes/>
    //    <VideoPlayer/>
    //    <VideoPlaylist />
    //   <UserPlaylists />
    //   <EventsList />
    //  </div>
    // );
    return ( 
      <div>
        {this.props.children || 'NO Components'}
      </div>
    );
  }
}