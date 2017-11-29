import React, { Component } from "react";
import { View, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Text } from "react-native";
import { connect } from "react-redux";
import { DrawerNavigator, NavigationActions } from "react-navigation";
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
  renderUsernameInput = (usernameError, boundUpdateField) => (
    <View>
      <FormLabel>Username</FormLabel>
      <FormInput inputStyle={styles.textInput} onChangeText={(text) => boundUpdateField('username', text)} defaultValue={'sconnor@finback670.com'}/>
      <FormValidationMessage>{usernameError}</FormValidationMessage>
    </View>
  )
  renderPasswordInput = (passwordError, boundUpdateField) => (
    <View>
      <FormLabel>Password</FormLabel>
      <FormInput inputStyle={styles.textInput} onChangeText={(text) => boundUpdateField('password', text)} defaultValue={'Spc0708cms!'}/>
      <FormValidationMessage>{this.props.auth.passwordError}</FormValidationMessage>
    </View>
  )
  render() {
    let boundUpdateField = this.updateField
    let boundRenderButtons = this.renderButtons
    let boundRenderUsernameInput = this.renderUsernameInput
    let boundRenderPasswordInput = this.renderPasswordInput
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.fullScreen, styles.centerCenter]}>
      <View style={styles.formContainer}>
            <Text>Login</Text>
            {this.props.auth.error && <Text>{this.props.auth.errorText}</Text>}
            {boundRenderUsernameInput(this.props.auth.usernameError, boundUpdateField)}
            {boundRenderPasswordInput(this.props.auth.passwordError, boundUpdateField)}
            {boundRenderButtons()}
            <Text>{`Login Attempts: ${this.props.auth.attempts}`}</Text>
        </View>
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Login;
