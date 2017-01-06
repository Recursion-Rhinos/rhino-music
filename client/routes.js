import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Navigation from './containers/navigation'
import SearchBar from './containers/search_bar';
import SearchResults from './containers/search_results_list';
import MusicPlayer from './containers/spotify_player';
import NYTimes from './containers/nytimes';
import VideoPlaylist from './containers/youtube_playlist';
import UserPlaylists from './containers/myMusic.js';
import VideoPlayer from './containers/youtube_player';
import EventsList from './containers/events_list.js';

export default (
  <Route path="/search" component={App} >
    <Route path="/search" component={ Navigation } />
    <Route path="/search" component={SearchBar} />
    <Route path="/search" component={MusicPlayer} />
    <Route path="/search" component={NYTimes} />
    <Route path="/search" component={VideoPlayer} />
    <Route path="/search" component={VideoPlaylist} />
    <Route path="/search" component={UserPlaylists} />
    <Route path="/search" component={EventsList} />
  </Route>
);

// export default Routes;