import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';
import Profile from './containers/Profile/profile';
import UserPlaylist from './containers/myMusic';

export default (
  <Route path= "/" component={App} >
  <IndexRoute component={Home} />
  <Route path="/profile" component={Profile} />
  <Route path="/MyMusic" component={UserPlaylist} />
  </Route>
);
