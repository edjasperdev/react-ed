var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./scripts/components/App');

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducers from './scripts/reducers';
import './styles/main.scss';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  ,document.getElementById('app')
);