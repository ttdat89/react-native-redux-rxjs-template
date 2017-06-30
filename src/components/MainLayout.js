/**
 * Created by Dat Tran on 4/26/17.
 */
import React from 'react'
import {
  View, StyleSheet, StatusBar,
  Platform, BackHandler
} from 'react-native'
import {connect} from 'react-redux'
import {addNavigationHelpers} from 'react-navigation';

import {AppNavigator} from './../redux/AppNavigator'
import IndicatorDialog from './common/IndicatorDialog'
import {pop} from './../actions/routes'

class MainLayout extends React.Component {

  componentDidMount() {
    Platform.OS === 'android' && BackHandler.addEventListener('hardwareBackPress', () => {
      const comp = AppNavigator.router.getComponentForState(this.props.navigationState)

      console.log(this.props.navigationState, comp.displayName)
      if (comp.displayName.includes('(HomeScreen)'))
        return false
      else {
        this.props.onPop()
        return true
      }
    })
  }

  render() {
    const {
      showGlobalIndicator
    } = this.props

    return <View style={styles.base}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"/>
      <View style={styles.base}>
        <AppNavigator navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.navigationState,
        })}/>
      </View>
      {showGlobalIndicator && <IndicatorDialog message={'Please wait.'}/>}
    </View>
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1
  }
})

export default connect(state => ({
  navigationState: state.navigationState,
  showGlobalIndicator: state.app.showGlobalIndicator
}), dispatch => ({
  onPop: () => dispatch(pop()),
  dispatch
}))(MainLayout)