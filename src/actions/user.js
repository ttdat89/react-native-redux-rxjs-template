/**
 * Created by Dat Tran on 4/27/17.
 */
import {get, post} from './../utilities/networking'

export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export function login() {
  return new Promise((resolve) => {
    resolve({userName: 'dat.tran', password: '12345678'})
  })
}

export const USER_LOGOUT = 'USER_LOGOUT'
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS'
export function logout() {
  return new Promise((resolve) => {
    resolve({data: 'success'})
  })
}