import React, { Component } from "react";
import { View, Text, SectionList } from "react-native";
import { SearchBar } from "react-native-elements";
import styles from './styles';
import {Stepper, Step, StepLabel, Button} from '../../../../../components'

const activeStep = 1
const numberOfSteps = 2

class MRR extends Component {
  getStepContent = (activeStep) => {
    switch(activeStep) {
      case 0:
        return <Text>Step One View</Text>
      case 1:
        return <Text>Step Two View</Text>

    }
  }
  getButtonContent = (activeStep, numberOfSteps) => {
    if (activeStep === 0) {
      return (
        <View style={styles.buttonGroupWrapper}>
          <Button text="Next" />
        </View>
      )
    } else if (activeStep < numberOfSteps) {
      return (
        <View style={styles.buttonGroupWrapper}>
          <Button text="Back" primary={false} />
          <Button text="Next" />
        </View>
      )
    } else if (activeStep === numberOfSteps) {
      return (
        <View style={styles.buttonGroupWrapper}>
          <Button text="Finish" />
        </View>
      )
    }
  }

  render() {
    return (
      <View style={[styles.fullScreen, styles.startCenter]}>
        <Stepper activeStep = {activeStep}>
          <Step>
            <StepLabel>Establish Rooms</StepLabel>
          </Step>
          <Step>
            <StepLabel>Sample Rooms</StepLabel>
          </Step>
          <Step>
            <StepLabel>Checklist</StepLabel>
          </Step>
        </Stepper>
        <View style={[styles.fullScreen, styles.centerCenter]}>
          {this.getStepContent(activeStep)}
          {this.getButtonContent(activeStep, numberOfSteps)}
        </View>
      </View>
    );
  }
}

export default MRR;
