/**
 * Created by Dat Tran on 4/27/17.
 */
import {combineReducers} from 'redux'
import routesReducer from './../reducers/routes'
import appReducer from '../reducers/app'
import userReducer from '../reducers/user'

export default combineReducers({
  navigationState: routesReducer,
  app: appReducer,
  user: userReducer
})