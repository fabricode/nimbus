import React, {Component} from 'react';
import { View, StyleSheet} from 'react-native'
import pure from 'recompose/pure';

const StepConnector = (props) => {
  const determineStepColor = (props) => {
    if(props.active) return "rgba(80, 80, 80, 0.5)"
    if(props.completed) return "rgba(80, 80, 80, 0.5)"
    if(props.disabled) return "rgba(80, 80, 80, 0.5)"
  }
  const styles = StyleSheet.create ({
    wrapper: {
      width: 25,
      height: 30,
      justifyContent: 'center',
      alignItems: "center",
    },
    line: {
      backgroundColor: determineStepColor(props.controlProps),
      width: 20,
      height: 1,
    },
  });
  return (
    <View style={styles.wrapper}>
      <View style={styles.line} />
    </View>
  );
};

export default pure(StepConnector)
