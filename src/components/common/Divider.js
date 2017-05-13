/**
 * Created by sts on 10/10/16.
 */
import React, {Component} from 'react';
import {View as RNView, StyleSheet} from 'react-native';

export default class Divider extends Component {

    render() {
        return (
            <RNView {...this.props} style={[style.divider, this.props.style]} />
        );
    }
}

const style = StyleSheet.create({
    divider: {
        alignSelf: 'stretch',
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#dddddd'
    }
});