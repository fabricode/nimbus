import React, { Component } from "react";
import { View, Text, SectionList, TouchableOpacity } from "react-native";
import { SearchBar, Icon } from "react-native-elements";
import styles from './JobsIndexStyles';
import { NavigationActions } from 'react-navigation'

class Job extends Component {
  navigateToDetail = (uuid) => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'JobsDetail',
      params: {jobTitle: uuid}
    })
    this.props.navigation.dispatch(navigateAction)
    this.props.onSetDetailJob(uuid)
  }
  renderListItem = ({item, section}) => {
    let boundNavigateToDetail = () => {this.navigateToDetail(item.key)}

    return this.props.visibleJobTypes[section.title]
      ?
      <TouchableOpacity onPress = {boundNavigateToDetail}>
        <View style = {[styles.listItem]}>
          <Text style = {[styles.listItemText]}>{item.text}</Text>
        </View>
      </TouchableOpacity>
      :
      null

  }
  renderSectionTitle = ({section}) => {
    let boundOnToggleVisibleJob = () => {this.props.onToggleVisibleJob(section.title)}
    return (
      <View style = {[styles.sectionTitle]}>
        <Text style = {[styles.sectionTitleText]}> {section.title} </Text>
        <TouchableOpacity style = {[styles.sectionIconWrapper]} onPress = {boundOnToggleVisibleJob}>
          <Icon name={this.props.visibleJobTypes[section.title] ? 'expand-less' : 'expand-more'} />
        </TouchableOpacity>
      </View>
    )
  }
  render() {
    let boundRenderSectionTitle = this.renderSectionTitle.bind(this)
    let boundRenderListItem = this.renderListItem.bind(this)
    return (
      <View style = {[styles.fullScreen, styles.centerCenter]}>
          <SearchBar onChangeText = { this.props.onUpdateSearchTerm } containerStyle = { styles.SearchBarContainerStyle } lightTheme round placeholder="Search existing jobs..." />
          <SectionList
            style = {styles.SectionListStyle}
            renderSectionHeader = {boundRenderSectionTitle}
            sections = {[ // heterogeneous rendering between sections
              {title: "Lead Based Paint", data: [{text: '0-0', key: 0}, {text: '0-1', key: 1}], renderItem: boundRenderListItem},
              {title: "Damage Assessment", data: [{text: '1-0', key: 10}, {text: '1-1', key: 11}], renderItem: boundRenderListItem},
              {title: "Maryland Risk Reduction", data: [{text: '2-0', key: 20}, {text: '2-1', key: 21}], renderItem: boundRenderListItem},
            ]}
          />
      </View>
    );
  }
}

export default Job;
