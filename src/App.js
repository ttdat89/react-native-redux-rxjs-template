/**
 * Created by Dat Tran on 4/26/17.
 */
import React from 'react'
import {
  Platform
} from 'react-native'
import {Provider} from 'react-redux'
import store from './redux/store'
import {connect} from 'react-redux'
import MainLayout from './components/MainLayout'
import Bootstrap from './components/Bootstrap'
import {requestPermissions} from './actions/app'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showApp: true
    }

    Platform.OS === 'android' && requestPermissions()
  }

  render() {
    return this.state.showApp ? <MainLayout/> : <Bootstrap/>
  }
}

const ConnectedApp = connect(state => ({})))(App)

export default function provider() {
  return <Provider store={store}>
    <ConnectedApp/>
  </Provider>
}