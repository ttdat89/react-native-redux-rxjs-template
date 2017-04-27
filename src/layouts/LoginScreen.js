/**
 * Created by Dat Tran on 4/27/17.
 */
import React from 'react'
import {connect} from 'react-redux'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import BaseScreen from './BaseScreen'
import {USER_LOGIN} from './../actions/user'

class LoginScreen extends BaseScreen {

  render() {
    return <View style={{flex: 1, backgroundColor: '#d67ed2', justifyContent: 'center'}}>
      <View style={{alignItems: 'center'}}>
        <Text>Login Screen</Text>
      </View>
      <TouchableOpacity activeOpacity={0.5}
                        onPress={() => {
                          this.props.onLogin()
                        }}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>GET STARTED</Text>
        </View>
      </TouchableOpacity>
    </View>
  }
}

export default connect(state => ({}), dispatch => ({
  onLogin: () => dispatch({type: USER_LOGIN})
}))(LoginScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: '#1b59d0',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 25,
    marginHorizontal: 50,
    height: 42
  },
  minorButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  }
})