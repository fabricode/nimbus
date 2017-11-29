import { StyleSheet } from 'react-native';
import commonStyles from '../../styles';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  }
});

export default {...commonStyles, ...styles}
