import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';
// import Navigation from './containers/navigation'
// import SearchBar from './containers/search_bar';
// import SearchResults from './containers/search_results_list';
// import MusicPlayer from './containers/spotify_player';
// import NYTimes from './containers/nytimes';
// import VideoPlaylist from './containers/youtube_playlist';
// import UserPlaylists from './containers/myMusic.js';
// import VideoPlayer from './containers/youtube_player';
// import EventsList from './containers/events_list.js';

export default (
    <Route path="/" component={App} >
    <IndexRoute component={Home}/>
    </Route>

);
