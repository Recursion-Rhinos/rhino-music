import React, {Component} from 'react';
import Navigation from '../containers/navigation.js';
import MusicPlayer from '../containers/spotify_player';
import EventsList from '../containers/events_list';
import SearchBar from '../containers/search_bar';
import GoogleMap from './GoogleMap'

export default class Events extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <MusicPlayer />
        <SearchBar />
        <EventsList />
        <GoogleMap />
      </div>
    )
  }
}