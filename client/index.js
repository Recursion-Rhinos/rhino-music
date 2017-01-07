import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import Thunk from 'redux-thunk'

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './components/app';
import reducers from './reducers';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const createStoreWithMiddleware = applyMiddleware(Thunk, ReduxPromise)(createStore);


ReactDOM.render(
<MuiThemeProvider>
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
</MuiThemeProvider>
  , document.querySelector('.container'));
