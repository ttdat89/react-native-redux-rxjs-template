/**
 * Created by Dat Tran on 4/27/17.
 */
import {Alert, AsyncStorage, NativeModules} from 'react-native'
import {Observable} from 'rxjs'
import {
  login, USER_LOGIN, USER_LOGIN_SUCCESS,
  logout, USER_LOGOUT, USER_LOGOUT_SUCCESS
} from './user'
import {
  SET_GLOBAL_INDICATOR_VISIBILITY
} from './app'

export default function (action$, store) {

  const login$ = action$.ofType(USER_LOGIN)
    .switchMap(() => login())
    .switchMap((data) => Observable.concat(
      Observable.of({type: USER_LOGIN_SUCCESS, ...data}),
      Observable.of({type: SET_GLOBAL_INDICATOR_VISIBILITY, visible: true}),
      Observable.of({type: SET_GLOBAL_INDICATOR_VISIBILITY, visible: false}).delay(2000),
      Observable.of({type: 'push', routeKey: 'Home'})
    ))

  const logout$ = action$.ofType(USER_LOGOUT)
    .switchMap(() => logout())
    .mapTo({type: 'pop'})
  return Observable.merge(
    login$
  ).do(func => console.log('epic: ', func))
}