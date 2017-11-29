import { StyleSheet } from 'react-native';
import commonStyles from '../../../../../styles'

const mrrStyles = StyleSheet.create({
  multipleButtons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: "100%",
    marginTop: 'auto',
    marginBottom: 25,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'space-between',
  },
  singleButtonEnd: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: "100%",
    marginTop: 'auto',
    marginBottom: 25,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'flex-end'
  },
  singleButtonStart: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: "100%",
    marginTop: 'auto',
    marginBottom: 25,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'flex-start'
  }
});

export default {...commonStyles, ...mrrStyles}
