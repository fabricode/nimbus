import React, { Component } from "react";
import { View, Text, SectionList } from "react-native";
import { SearchBar } from "react-native-elements";
import styles from './styles';
import {Stepper, Step, StepLabel, Button} from '../../../../../components'
import {Setup, SurveyRooms, Checklist} from './JobSteps'
const numberOfSteps = 2

class MRR extends Component {
  getStepContent = (activeStep) => {
    switch(activeStep) {
      case 0:
        return <Setup />
      case 1:
        return <SurveyRooms />
      case 2:
        return <Checklist />
    }
  }
  getButtonContent = (activeStep, numberOfSteps, onIncrementActiveStep, onDecrementActiveStep) => {
    if (activeStep === 0) {
      return (
        <View style={styles.singleButtonEnd}>
          <Button text="Next" onPress={onIncrementActiveStep}/>
        </View>
      )
    } else if (activeStep < numberOfSteps) {
      return (
        <View style={styles.multipleButtons}>
          <Button text="Back" primary={false} onPress={onDecrementActiveStep}/>
          <Button text="Next" onPress={onIncrementActiveStep}/>
        </View>
      )
    } else if (activeStep === numberOfSteps) {
      return (
        <View style={styles.multipleButtons}>
          <Button text="Back" disabled={true} primary={false} onPress={onDecrementActiveStep}/>
          <Button text="Finish" enabled={true} />
        </View>
      )
    }
  }

  render() {
    const {
      onIncrementActiveStep,
      onDecrementActiveStep,
      onChangeActiveStep,
      activeStep
    }  = this.props
    console.log(activeStep)
    return (
      <View style={[styles.fullScreen, styles.startCenter, styles.whiteBackground]}>
        <Stepper activeStep = {activeStep} controlled={true} changeActiveStep={onChangeActiveStep}>
          <Step>
            <StepLabel>Setup Job</StepLabel>
          </Step>
          <Step>
            <StepLabel>Setup Rooms</StepLabel>
          </Step>
          <Step>
            <StepLabel>Sample Rooms</StepLabel>
          </Step>
          <Step>
            <StepLabel>Checklist</StepLabel>
          </Step>
        </Stepper>
        <View style={[styles.fullScreen]}>
          {this.getStepContent(activeStep)}
          {this.getButtonContent(activeStep, numberOfSteps, onIncrementActiveStep, onDecrementActiveStep)}
        </View>
      </View>
    );
  }
}

export default MRR;
