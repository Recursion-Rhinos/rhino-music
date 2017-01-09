import React, {Component} from 'react';
import Navigation from '../containers/navigation.js';
import MusicPlayer from '../containers/spotify_player';
import UserPlayLists from '../containers/myMusic.js';

export default class MyPlaylists extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <MusicPlayer />
        <UserPlayLists />
      </div>
    )
  }
}