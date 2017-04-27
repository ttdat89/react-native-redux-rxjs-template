/**
 * Created by Dat Tran on 4/27/17.
 */
import {createStore, applyMiddleware, compose} from 'redux'
import reducers from './reducers'
import {createEpicMiddleware} from 'redux-observable';
// import {composeWithDevTools} from 'remote-redux-devtools'

import initialState from './initialState'
import epic from './../actions/epic';

/**
 *  Redux Store configuration
 */

const middlewares = [
  createEpicMiddleware(epic)
];

//create store
var store = createStore(reducers, initialState,
  compose(
    applyMiddleware(...middlewares)
  )
);

export default store;