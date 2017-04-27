/**
 * Created by Dat Tran on 4/21/17.
 */
import React from 'react'
import {View, Text} from 'react-native'
import {StackNavigator, DrawerNavigator} from 'react-navigation';
import {enhance} from 'react-navigation-addons';

import {RouteKey} from './../constants/index'
import LoginScreen from './../layouts/LoginScreen'
import HomeScreen from './../layouts/HomeScreen'
import DetailScreen from './../layouts/DetailScreen'
import SideMenu from '../layouts/menu/SideMenu'

export const MainStack = enhance(StackNavigator)({
  Home: {
    key: 'home',
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: {
      headerTitle: 'Detail'
    }
  }
}, {
  navigationOptions: {
    headerTitleStyle: {
      color: 'white'
    },
    headerStyle: {
      backgroundColor: '#1b59d0',
      paddingTop: 20,
      height: 72,
    },
    headerTintColor: 'white',
    gesturesEnabled: false
  }
})

export const MainDrawer = DrawerNavigator({
  MainStack: {
    screen: MainStack,
    navigationOptions: {
      drawerLabel: 'MAIN MENU',
    }
  }
}, {
  drawerPosition: 'left',
  contentComponent: SideMenu
})

export const AppNavigator = StackNavigator({
  Login: {
    key: RouteKey.Login,
    screen: LoginScreen,
    gesturesEnabled: false,
  },
  Home: {
    key: 'Home',
    screen: MainDrawer,
    gesturesEnabled: false,
    navigationOptions: {
      gesturesEnabled: false
    }
  }
}, {
  headerMode: 'none'
})

