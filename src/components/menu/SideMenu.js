/**
 * Created by sts on 11/17/16.
 */
import React from 'react'
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  ScrollView
} from 'react-native'
import Divider from '../common/Divider';
import {connect} from 'react-redux'
import {push, resetToRoute, popToRoot} from '../../actions/routes'
import {RouteKey} from '../../constants/index'
import {getText} from '../../utilities/localization'
import {USER_LOGOUT} from './../../actions/user'
import Svg, {
  LinearGradient,
  Rect,
  Defs,
  Stop
} from 'react-native-svg'

const {width, height} = Dimensions.get('window')
const background = require('../../assets/images/menu/background.png')
const booking = require('../../assets/images/menu/booking.png')
const healthstats = require('../../assets/images/menu/healthstats.png')
const profile = require('../../assets/images/menu/profile.png')
const tele = require('../../assets/images/menu/tele.png')
const logo = require('../../assets/images/menu/logo.png')
const separator = require('../../assets/images/menu/separator.png')
const logout = require('../../assets/images/logout.png')
const setting = require('../../assets/images/settings.png')

class SideMenuItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let view = <View/>
    view = this.props.noBorder ?
      (
        <View style={styles.containerNoBoder}>
          <Text style={styles.text}>{this.props.label}</Text>
        </View>
      )
      :
      (
        <View style={styles.container}>
          <Text style={styles.text}>{this.props.label}</Text>
        </View>
      );
    return (
      <TouchableOpacity style={{height: 60, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16}}
                        onPress={this.props.onPress}>
        <Image style={{width: 24, height: 24, marginRight: 28}}
               resizeMode='contain'
               source={this.props.icon}/>
        {view}
        <Divider styleName="line"/>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  containerNoBoder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  rightIcon: {
    height: 20,
    width: 20,
  },
  text: {
    fontSize: 18,
    color: 'white'
  }
});

const MenuDivider = () => (
  <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
    <Divider style={menuStyle.separator}/>
  </View>
)

class SideMenu extends React.Component {

  render() {
    const {closeSideMenu, language} = this.props;
    console.log('SideMenu', this.props)
    return (

      <View style={menuStyle.container}>
        <View style={{position: 'absolute', width: '100%', height: '100%'}}>
          <Svg
            height={height}
            width={width}>
            <Defs>
              <LinearGradient id="grad" x1="0" y1="0" x2="0" y2={height}>
                <Stop offset="0" stopColor={'#0e4ebb'}/>
                <Stop offset="1" stopColor={'#46bfdd'}/>
              </LinearGradient>
            </Defs>
            <Rect x="0"
                  y="0"
                  height={height}
                  width={width}
                  fill="url(#grad)"/>
          </Svg>
        </View>
        <ScrollView style={{width: '100%'}}>
          <View style={menuStyle.content}>
            <View>
              <TouchableOpacity
                key={1}
                style={menuStyle.listItem}
                onPress={() => {
                  this.props.onPopToRoot({
                    routeName: RouteKey.Home,
                    routeTitle: 'Main Menu'
                  });
                }}>
                <Image source={healthstats} style={menuStyle.itemIcon}/>
                <Text style={menuStyle.listItemTitle}>{getText('main_menu', language).toUpperCase()}</Text>
              </TouchableOpacity>
              <MenuDivider/>
            </View>
            <View>
              <TouchableOpacity
                key={1}
                style={menuStyle.listItem}
                onPress={() => {
                  this.props.onPopToRoot({
                    routeName: RouteKey.UserProfile,
                    routeTitle: 'User Profile'
                  });
                }}>
                <Image source={profile} style={menuStyle.itemIcon}/>
                <Text style={menuStyle.listItemTitle}>{getText('profile', language).toUpperCase()}</Text>
              </TouchableOpacity>
              <MenuDivider/>
            </View>
            <View>
              <TouchableOpacity
                key={1}
                style={menuStyle.listItem}
                onPress={() => {
                  this.props.onLogOut()
                  this.props.onPopToRoot()
                }}>
                <Image source={logout} style={menuStyle.itemIcon}/>
                <Text style={menuStyle.listItemTitle}>{getText('log_out', language).toUpperCase()}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const menuStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logoWrap: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 105,
    marginTop: 40
  },
  content: {
    position: 'relative',
    justifyContent: 'center',
    marginTop: 50
  },
  listItem: {
    height: 44,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  listItemTitle: {
    fontSize: 13,
    color: '#fff',
    flexShrink: 1,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  itemIcon: {
    width: 22,
    height: 28,
    marginRight: 40,
    marginLeft: 40,
    resizeMode: 'contain'
  },
  separator: {
    flex: 1,
    marginLeft: 102
  }
});


export default connect(state => ({
  language: state.app.language
}), dispatch => ({
  onPush: (routeName) => dispatch(push(routeName)),
  onPopToRoot: (routeName) => dispatch(popToRoot()),
  onLogOut: () => dispatch({type: USER_LOGOUT})
}))(SideMenu)
