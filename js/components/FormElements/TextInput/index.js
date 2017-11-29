/* @flow */

import React, { Component, defaultProps } from 'react';
import styles from './styles';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

export default class CustomTextInput extends Component {
  static defaultProps = {
  }
  render() {
    const {
      label,
      labelStyle
    } = this.props
    return (
      <View style={styles.formElement}>
        <Text style={styles.formLabel}>{label}</Text>
        <TextInput style={styles.inputDefault} {...this.props}/>
      </View>
    );
  }
}
