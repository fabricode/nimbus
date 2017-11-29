import React, { Component } from "react";
import { View, Text, SectionList } from "react-native";
import { SearchBar } from "react-native-elements";
import styles from './JobsIndexStyles';
import {MRR} from '../containers/JobLibrary'

class JobDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Job ID: ${navigation.state.params.jobTitle}`,
  });
  determineJobType = () => {
    return <MRR />
  }
  render() {
    const { params } = this.props.navigation.state;
    const boundDetermineJobType = this.determineJobType
    return (
      <View style={[styles.fullScreen, styles.centerCenter]}>
        {boundDetermineJobType()}
      </View>
    );
  }
}

export default JobDetail;
