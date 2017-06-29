/**
 * Created by Dat Tran on 4/27/17.
 */
import {PermissionsAndroid} from 'react-native'

export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'
export function changeLanguage(selectedLanguage) {
  return {
    type: CHANGE_LANGUAGE,
    language: selectedLanguage
  }
}

export const SET_GLOBAL_INDICATOR_VISIBILITY = 'SET_GLOBAL_INDICATOR_VISIBILITY'
export function setGlobalIndicatorVisibility(visible) {
  return {
    type: SET_GLOBAL_INDICATOR_VISIBILITY,
    visible
  }
}

export function requestPermissions() {
  try {
    return PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
      PermissionsAndroid.PERMISSIONS.CALL_PHONE]
    )
  } catch (err) {
    console.warn(err)
  }
}

export const TOKEN_IS_AVAILABLE = 'TOKEN_IS_AVAILABLE'
export const TOKEN_IS_NOT_AVAILABLE = 'TOKEN_IS_NOT_AVAILABLE'