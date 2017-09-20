import React, { Component } from "react";
import { View, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Text } from "react-native";
import { connect } from "react-redux";
import { DrawerNavigator, NavigationActions } from "react-navigation";
import { Grid, Row } from "react-native-easy-grid";
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import styles from './indexStyles'

class Login extends Component {
  updateField = (field, value) => {
    this.props.onUpdateField(field, value)
  }
  renderButtons = () => (
    <View style={[styles.row, styles.endCenter]}>
      <Button style={styles.loginButton} title='Sync' />
      <Button style={styles.loginButton} title='Log In' onPress={ this.props.onLogin } />
    </View>
  )
  render() {
    let boundUpdateField = this.updateField
    let boundRenderButtons = this.renderButtons
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.fullScreen}>
        <View style={styles.formContainer}>
            <Text>Login</Text>
            {this.props.auth.error && <Text>{this.props.auth.errorText}</Text>}
            <FormLabel>Username</FormLabel>
            <FormInput onChangeText={(text) => boundUpdateField('username', text)} defaultValue={'sconnor@finback670.com'}/>
            <FormValidationMessage>{this.props.auth.usernameError}</FormValidationMessage>
            <FormLabel>Password</FormLabel>
            <FormInput onChangeText={(text) => boundUpdateField('password', text)} defaultValue={'Spc0708cms!'}/>
            <FormValidationMessage>{this.props.auth.passwordError}</FormValidationMessage>
            {boundRenderButtons()}
            <Text>{`Login Attempts: ${this.props.auth.attempts}`}</Text>
        </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Login;
