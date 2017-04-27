/**
 * Created by Dat Tran on 4/27/17.
 */
import {USER_LOGIN_SUCCESS} from './../actions/user'

export default function user(state, action) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          userName: action.userName,
          password: action.password
        }
      }
    default:
      return {
        ...state
      }
  }
}