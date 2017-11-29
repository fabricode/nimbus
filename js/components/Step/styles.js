import { StyleSheet } from 'react-native';
import commonStyles from '../../styles'

const styles = StyleSheet.create({
  wrapper: {
    height: 30,
    alignItems:'center',
    justifyContent:'center'
  }
});

export default {...commonStyles, ...styles}
