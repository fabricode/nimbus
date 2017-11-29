import { StyleSheet } from 'react-native';
import commonStyles from '../../../../../styles'

const mrrStyles = StyleSheet.create({
  buttonGroupWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: "100%",
    marginTop: 'auto',
    marginBottom: 25,
    paddingLeft: 50,
    paddingRight: 50,
  }
});

export default {...commonStyles, ...mrrStyles}
