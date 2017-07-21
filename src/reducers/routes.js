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
        routeName: action.routeName,
        params: action.params
      }), state)
      return (newState ? newState : state)
    }
    case 'pop': {
      let newState = AppNavigator.router.getStateForAction(NavigationActions.back(), state)
      return (newState ? newState : state)
    }
    case 'popToRoot':
    case 'reset':
      return {
        ...state,
        index: 0,
        routes: [{key: 'Init', routeName: RouteKey.Login}]
      }
    case 'resetToRoute':
      const newState = AppNavigator.router.getStateForAction(NavigationActions.reset({
        index: 0,
        key: action.key,
        actions: [
          NavigationActions.navigate({routeName: action.routeName})
        ]
      }), state)
      return newState || state
    // case TOKEN_IS_AVAILABLE: {
    //   let newState = AppNavigator.router.getStateForAction(NavigationActions.navigate({
    //     routeName: RouteKey.Home
    //   }), state)
    //   return (newState ? newState : state)
    // }
    case TOKEN_IS_NOT_AVAILABLE:
      return {
        ...state,
        index: 0,
        routes: [{key: 'Init', routeName: RouteKey.Login}]
      }
    default: {
      let newState = AppNavigator.router.getStateForAction(action, state)
      return (newState ? newState : state)
    }
  }
}