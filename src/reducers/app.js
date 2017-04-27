/**
 * Created by Dat Tran on 4/27/17.
 */
import {
  SET_GLOBAL_INDICATOR_VISIBILITY,
  CHANGE_LANGUAGE
} from './../actions/app'

export default function app(state = {}, action) {
  switch (action.type) {
    case SET_GLOBAL_INDICATOR_VISIBILITY:
      return {
        ...state,
        showGlobalIndicator: action.visible
      }
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.language
      }
    default:
      return state
  }
}