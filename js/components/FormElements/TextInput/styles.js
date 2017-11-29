import { StyleSheet } from 'react-native';
import commonStyles from '../../../styles'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 10
  },
  inputDefault: {
    width: 150,
    height: 30,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    backgroundColor: 'white'
  }
});

export default {...commonStyles, ...styles}
