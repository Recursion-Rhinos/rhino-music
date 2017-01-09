import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Router, hashHistory } from 'react-router'; //browserHistory, hashHistory and memoryHistory
import reducers from './reducers';
import routes from './routes';
// import App from './components/app';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
<MuiThemeProvider>
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={hashHistory} routes={routes}/>
  </Provider>
</MuiThemeProvider>
  , document.querySelector('.container'));
