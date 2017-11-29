/* @flow */

import React, { Component, Children } from 'react';
import styles from './styles';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

export default class Step extends Component {
  renderChild = (child) => {
    const {
      active,
      completed,
      disabled,
      index,
      last,
    } = this.props;

    const icon = index + 1;
    return React.cloneElement(child, Object.assign(
      {active, completed, disabled, icon, last},
      child.props
    ));
  }
  render() {
    const {
     active,
     completed,
     disabled,
     index,
     last,
     children,
     style,
     controlled,
     changeActiveStep,
     ...other
     } = this.props;
     // Set up binding context and step index IF there is a Change Step Function provided
    let boundChangeActiveStep
    if(controlled && typeof changeActiveStep === 'function'){
      boundChangeActiveStep = changeActiveStep.bind(this, index)
    }
    return (
      controlled
      ?
      <TouchableHighlight onPress={boundChangeActiveStep}>
        <View {...other} style={styles.wrapper}>
          {React.Children.map(children, this.renderChild)}
        </View>
      </TouchableHighlight>
      :
      <View {...other} style={styles.wrapper}>
        {React.Children.map(children, this.renderChild)}
      </View>
    );
  }
}
