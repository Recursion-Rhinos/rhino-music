import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';
import Profile from './containers/Profile/profile';
import MyPlaylists from './components/myPlaylists';
import Youtube from './components/youtube';
import News from './components/news';
import Events from './components/events';
import About from './components/about';

export default (
  <Route path= "/" component={App} >
  <IndexRoute component={Home} />
  <Route path="/profile" component={Profile} />
  <Route path="/MyMusic" component={MyPlaylists} />
  <Route path="/Youtube" component={Youtube} />
  <Route path="/News" component={News} />
  <Route path="/Events" component={Events} />
  <Route path="/About" component={About} />
  </Route>
);
