import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import Thunk from 'redux-thunk';
import { Router, browserHistory } from 'react-router'; //browserHistory, hashHistory and memoryHistory
import reducers from './reducers';
import routes from './routes';
// import App from './components/app';


const createStoreWithMiddleware = applyMiddleware(Thunk, ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.container'));
