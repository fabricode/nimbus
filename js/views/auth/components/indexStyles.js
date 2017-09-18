import { StyleSheet } from 'react-native';
import commonStyles from '../../../styles'

const indexStyles = StyleSheet.create({
  formContainer: {
    width: '100%',
  },
  loginButton: {
    marginTop: '10%',
  }
});

export default {...indexStyles, ...commonStyles}
