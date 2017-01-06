import React from 'react';
import { Router, IndexRoute } from 'react-router';

import App from './components/app.js';

export default (
  <Router path="/search" component={App} /> // /search?
)
// const Routes = (props) => (
//   <Router {...props}>
//     <Route path="/api/search" component={App} />
//     // <Route path="/about" component={About} />
//     // <Route path="*" component={NotFound} />
//   </Router>
// );

// export default Routes;