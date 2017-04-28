/**
 * Created by Dat Tran on 4/27/17.
 */
import {RouteKey} from './../constants/index'
import {AppNavigator} from './../redux/AppNavigator'
import {NavigationActions} from 'react-navigation'
import {TOKEN_IS_AVAILABLE, TOKEN_IS_NOT_AVAILABLE} from './../actions/app'

export default function routes(state, action) {
  switch (action.type) {
    case 'push': {
      let newState = AppNavigator.router.getStateForAction(NavigationActions.navigate({
        key: action.key,
        routeName: action.routeName
      }), state)
      console.log('push ', newState)
      return (newState ? newState : state)
    }
    case 'pop': {
      let newState = AppNavigator.router.getStateForAction(NavigationActions.back(), state)
      return (newState ? newState : state)
    }
    case 'reset':
      return {
        ...state,
        index: 0,
        routes: [{key: 'Init', routeName: 'Login'}]
      }
    case 'popToRoute': {
      console.log('current Route state', state)
      let newState = AppNavigator.router.getStateForAction(NavigationActions.back({key: action.routeName}), state)
      return (newState ? newState : state)
    }
    case 'popToRoot':
      return {
        ...state,
        index: 0,
        routes: [{routeName: 'Login'}]
      }
    case TOKEN_IS_AVAILABLE: {
      let newState = AppNavigator.router.getStateForAction(NavigationActions.navigate({
        routeName: RouteKey.Home
      }), state)
      return (newState ? newState : state)
    }
    case TOKEN_IS_NOT_AVAILABLE:
      return {
        ...state
      }
    default: {
      let newState = AppNavigator.router.getStateForAction(action, state)
      return (newState ? newState : state)
    }
  }
}