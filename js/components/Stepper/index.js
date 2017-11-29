import React, { Component, Children } from 'react';
import styles from './styles';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Connector from './connector';

class Stepper extends Component {
  renderProgress = () => {

  }
  generateSteps = (children, activeStep, controlled, changeActiveStep) => {
    const numChildren = Children.count(children);
    let steps = Children.map(children, (step, index) => {
      if (!React.isValidElement(step)) {
        return null;
      }
      const controlProps = {index};
      if (activeStep === index) {
        controlProps.active = true;
      } else if (activeStep > index) {
        controlProps.completed = true;
      } else if (activeStep < index) {
        controlProps.disabled = true;
      }

      if (index + 1 === numChildren) {
        controlProps.last = true;
      }
      return [
        index > 0 && <Connector controlProps={controlProps}/>,
        React.cloneElement(step, {...step.props, ...controlProps, controlled, changeActiveStep}),
      ];
    });
    return steps
  }

  render() {
    const {
      activeStep,
      children,
      controlled,
      changeActiveStep,
      style,
    } = this.props;
    const steps = this.generateSteps(children, activeStep, controlled, changeActiveStep)
    return (
      <View style={styles.wrapper}>
        {steps}
      </View>
    );
  }
}

export default Stepper
