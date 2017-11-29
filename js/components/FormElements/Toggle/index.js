/* @flow */

import React, { Component, defaultProps } from 'react';
import styles from './styles';
import {
  View,
  Text,
  StyleSheet,
  Switch
} from 'react-native';

export default class Toggle extends Component {
  static defaultProps = {
    labelStyle: {
      marginRight: 10,
      marginBottom: 2
    },
    value: false
  }
  render() {
    const {
      disabled,
      value,
      onTintColor,
      onValueChange,
      label,
      tintColor,
      thumbTintColor,
      labelStyle
    } = this.props
    return (
      <View style={styles.formElement}>
        <Text style={styles.formLabel}>{label}</Text>
        <Switch {...this.props}/>
      </View>
    );
  }
}
