import React, {Component} from 'react';
import Navigation from '../containers/navigation.js';
import MusicPlayer from '../containers/spotify_player';
import EventsList from '../containers/events_list';
import SearchBar from '../containers/search_bar';

export default class Events extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <MusicPlayer />
        <SearchBar />
        <EventsList />
      </div>
    )
  }
}