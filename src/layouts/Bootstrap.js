/**
 * Created by Dat Tran on 1/23/17.
 */
import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions
} from 'react-native';
import {connect} from 'react-redux'

const background = require('./../assets/images/login/background.png');
const {width, height} = Dimensions.get('window');

class Bootstrap extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={background} style={styles.background} resizeMode="cover"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width,
    height
  }
})

export default connect(state => ({}), dispatch => ({}))(Bootstrap)