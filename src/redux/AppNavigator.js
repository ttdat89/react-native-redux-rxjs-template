/**
 * Created by Dat Tran on 4/21/17.
 */
import React from 'react'
import {View, Text, Image} from 'react-native'
import {StackNavigator, DrawerNavigator, TabNavigator} from 'react-navigation';

import {RouteKey} from './../constants/index'
import LoginScreen from '../components/LoginScreen'
import HomeScreen from '../components/HomeScreen'
import DetailScreen from '../components/DetailScreen'
import MoreDetailScreen from '../components/MoreDetailScreen'
import SideMenu from '../components/menu/SideMenu'
import PendingAgentsScreen from '../components/PendingAgentsScreen'

export const MainStack = StackNavigator({
  Home: {
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
    headerTintColor: 'white'
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
  swipeEnabled: false,
  backBehavior: 'none',
  tabBarOptions: {
    indicatorStyle: {
      backgroundColor: 'white'
    }
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
    screen: LoginScreen
  },
  MainDrawer: {
    screen: MainDrawer
  }
}, {
  headerMode: 'none'
})

