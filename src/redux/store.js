/**
 * Created by Dat Tran on 4/27/17.
 */
import {createStore, applyMiddleware, compose} from 'redux'
import reducers from './reducers'
import {createEpicMiddleware} from 'redux-observable';
import initialState from './initialState'
import epic from './../actions/epic';
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';

/**
 *  Redux Store configuration
 */

const middlewares = [
  createEpicMiddleware(epic),
  createReactNavigationReduxMiddleware(
    'root',
    state => state.navigationState
  )
];

//create store
var store = createStore(reducers, initialState,
  compose(
    applyMiddleware(...middlewares)
  )
);

export default store;