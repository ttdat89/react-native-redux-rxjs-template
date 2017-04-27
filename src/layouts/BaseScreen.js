/**
 * Created by Dat Tran on 4/27/17.
 */
import React from 'react'
import {connect} from 'react-redux'

class BaseScreen extends React.Component {

  render() {

  }
}

export default connect(state => ({
  language: state.app.language
}), dispatch => ({

}))(BaseScreen)