import { StyleSheet } from 'react-native';
import commonStyles from '../../../styles'

const indexStyles = StyleSheet.create({
  SearchBarContainerStyle: {
    width: '100%',
    backgroundColor: 'white',
    borderColor: 'transparent',
  },
});

export default {...commonStyles, ...indexStyles}
