/**
 * Created by Dat Tran on 12/21/16.
 */
import {RouteKey} from './../constants/index'

export function push({routeName, key}) {
  return {
    type: 'push',
    routeName,
    key
  }
}

export function pop() {
  return {
    type: 'pop'
  }
}

export function popToRoute(routeKey) {
  return {
    type: 'popToRoute',
    routeKey
  }
}

export function popToRoot() {
  return {
    type: 'popToRoot'
  }
}

export function resetToRoute({routeName, params}) {
  return {
    type: 'resetToRoute',
    routeName,
    key: RouteKey.Login,
    params
  }
}