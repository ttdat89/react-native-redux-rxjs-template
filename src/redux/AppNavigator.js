/**
 * Created by Dat Tran on 4/21/17.
 */
import React from 'react'
import {View, Text, Image} from 'react-native'
import {StackNavigator, DrawerNavigator, TabNavigator} from 'react-navigation';

import {RouteKey} from './../constants/index'
import LoginScreen from './../layouts/LoginScreen'
import HomeScreen from './../layouts/HomeScreen'
import DetailScreen from './../layouts/DetailScreen'
import MoreDetailScreen from './../layouts/MoreDetailScreen'
import SideMenu from './../layouts/menu/SideMenu'
import PendingAgentsScreen from './../layouts/PendingAgentsScreen'

export const MainStack = StackNavigator({
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
  },
  MoreDetail: {
    screen: MoreDetailScreen,
    navigationOptions: {
      headerTitle: 'More Detail'
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

export const MainTab = TabNavigator({
  MainStack: {
    screen: MainStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: <Image
        resizeMode="contain"
        style={{width: 30, height: 30}}
        source={require('./../assets/images/card_icon.png')}/>
    }
  },
  PendingAgents: {
    screen: PendingAgentsScreen,
    navigationOptions: {
      tabBarLabel: 'Pending Agents'
    }
  }
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    scrollEnabled: false,
    showIcon: true
  }
})

export const MainDrawer = DrawerNavigator({
  MainTab: {
    screen: MainTab
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
  MainDrawer: {
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

