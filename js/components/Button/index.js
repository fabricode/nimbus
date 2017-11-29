/* @flow */

import React, { Component, defaultProps } from 'react';
import styles from './styles';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import theme from '../../styles/theme'
// Button options are rounded, primary, validation, and dimensions.
// Rounded defaults to true, false makes square edges
// Primary defaults to a filled button, false makes an outlined button
// Validation defaults to false, a function results in green for true and false makes the button color gray

const getButtonColor = (validation) => {
  if(validation) return validation() ? theme.colors.green50 : theme.colors.gray50
  return theme.colors.lightblue75
}
const getPrimaryColor = (primary, buttonColor) => primary ? buttonColor : "rgb(255,255,255)"

const getSecondaryColor = (primary, buttonColor) => primary ? "rgb(255,255,255)" : buttonColor

const prepareStyles = (style, rounded, primary, validation) => {
  let buttonColor = getButtonColor(validation)
  let primaryColor = getPrimaryColor(primary, buttonColor);
  let secondaryColor = getSecondaryColor(primary, buttonColor)
  let preparedStyles = style
  preparedStyles = rounded ? {...preparedStyles} : {...preparedStyles, borderRadius: 0}
  preparedStyles = {...preparedStyles, backgroundColor: primaryColor, borderColor: secondaryColor}
  return preparedStyles
}
export default class Button extends Component {
  static defaultProps = {
    rounded: true,
    primary: true,
    validation: false,
    style: {
      width: 100,
      height: 40,
      borderRadius: 3,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
    },
  }
  onButtonPress = () => {
    let validation = this.props.validation
    let validationisFunction = typeof validation === 'function'

    if(!validationisFunction)
      this.props.onPress()
  }
  render() {
    const {
      rounded,
      primary,
      validation,
      text,
      Icon,
      onPress,
      style
    } = this.props
    const buttonStyle = prepareStyles(style, rounded, primary, validation)
    const boundButtonPress = this.onButtonPress.bind(this)
    let textColor = buttonStyle.borderColor
    return (
      <TouchableOpacity style={{width: buttonStyle.width, height: buttonStyle.height}} onPress={boundButtonPress}>
        <View style={buttonStyle}>
          {Icon && <Icon />}
          {text && <Text style={{color: textColor}}>{text}</Text>}
        </View>
      </TouchableOpacity>
    );
  }
}
