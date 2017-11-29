import { StyleSheet } from 'react-native';
import commonStyles from '../../../styles'

const indexStyles = StyleSheet.create({
  textInput: {
    width: '100%',
  },
  loginButton: {
    marginTop: '10%',
  },
  formContainer: {
    width: '90%',
  }
});

export default {...commonStyles, ...indexStyles}
