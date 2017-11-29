/* @flow */
import React, { Component, Children } from 'react';
import styles from './styles';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import Svg,{
    Circle,
    Text as SVGText
} from 'react-native-svg';
import theme from '../../styles/theme'
import { SearchBar, Icon } from "react-native-elements";

const renderIcon = (completed, icon, props) => {
  const iconType = typeof icon;
  let color = determineStepColor(props)
  if (iconType === 'number' || iconType === 'string') {
    if (completed) {
      return (
        <Icon color={color} name='check-circle' />
      );
    }
    return (
      <Svg height="24" width="24">
        <Circle cx="12" cy="12" r="10" fill={color}/>
        <SVGText
          x="11"
          y="1"
          textAnchor="middle"
          fontSize="14"
          fill="#fff"
        >
          {icon}
        </SVGText>
      </Svg>
    );
  }

  return icon;
};
const determineStepColor = (props) => {
  if(props.active) return theme.colors.lightblue
  if(props.completed) return theme.colors.green50
  if(props.disabled) return theme.colors.gray50
}
const renderChildren = (children, props) => {
  let color = determineStepColor(props)
  if (typeof children === 'string' || children instanceof String) {
    return <Text style={{color}}>{children}</Text>
  }
  return children.map((labelChild, index) => {
    if (React.isValidElement(labelChild)) {
      return labelChild
    }
    if (typeof labelChild === 'string' || labelChild instanceof String) {
      return <Text>labelChild</Text>
    }
  })
}
const StepLabel = (props, context) => {
  const {
    active, // eslint-disable-line no-unused-vars
    children,
    completed,
    icon: userIcon,
    iconContainerStyle,
    last, // eslint-disable-line no-unused-vars
    style,
    ...other
  } = props;

  const icon = renderIcon(completed, userIcon, props);

  return (
    <View {...other} style={styles.wrapper}>
      {icon && (
        <View style={{marginRight: 5}}>
          {icon}
        </View>
      )}
      {renderChildren(children, props)}
    </View>
  );
}

export default StepLabel;
