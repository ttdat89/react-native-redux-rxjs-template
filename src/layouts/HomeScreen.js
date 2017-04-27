/**
 * Created by Dat Tran on 4/27/17.
 */
import React from 'react'
import {connect} from 'react-redux'
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import {RouteKey} from './../constants/index'

class HomeScreen extends React.Component {

  static navigationOptions = ({navigation, screenProps}) => ({
    gesturesEnabled: false,
    headerLeft: <TouchableOpacity style={{flexDirection: 'column', justifyContent: 'center'}}
                                  onPress={() => navigation.navigate('DrawerOpen', () => console.log('co thiet la vo ko'))}>
      <Image style={{
        height: 32,
        width: 32,
        marginLeft: 14,
        resizeMode: 'contain'
      }} source={require('./../assets/images/menu.png')}/>
    </TouchableOpacity>
  })

  render() {
    const {userInfo, language} = this.props
    console.log(this.props)
    return <View style={{flex: 1, backgroundColor: '#d67ed2', justifyContent: 'center'}}>
      <View style={{alignItems: 'center'}}>
        <Text>Home Screen</Text>
        <Text>{language}</Text>
        <Text>{`${userInfo.userName} ${userInfo.password}`}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.5}
                        onPress={() => {
                          this.props.onPush()
                        }}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Go Detail</Text>
        </View>
      </TouchableOpacity>
    </View>
  }
}

export default connect(state => ({
  userInfo: state.user.userInfo
}), dispatch => ({
  onPush: () => dispatch({type: 'push', routeKey: RouteKey.Detail})
}))(HomeScreen)

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