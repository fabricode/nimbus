import { StyleSheet } from 'react-native';
import commonStyles from '../../styles'

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    margin: 10
  }
});

export default {...commonStyles, ...styles}
