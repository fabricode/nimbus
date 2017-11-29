import { StyleSheet } from 'react-native';
import commonStyles from '../../../styles'
import theme from '../../../styles/theme'

const indexStyles = StyleSheet.create({
  SearchBarContainerStyle: {
    width: '100%',
    backgroundColor: 'white',
    borderColor: 'transparent',
  },
  SectionListStyle: {
    flex: 1,
    width: '100%'
  },
  sectionTitle: {
    flex: 1,
    width: '100%',
    paddingTop: '1%',
    paddingBottom: '1%',
    paddingLeft: '1%',
    paddingRight: '2%',
    flexDirection: 'row'
  },
  sectionTitleText: {
    fontSize: 20,
    color: theme.colors.darkblue,
    fontWeight: "500",
    flex: 19
  },
  sectionIconWrapper: {
    flex: 1
  },
  listItem: {
    paddingLeft: '5%',
    backgroundColor: 'rgb(240,240,240)',
    borderBottomColor: 'rgb(250,250,250)',
    borderBottomWidth: 1,
    paddingTop: '1%',
    paddingBottom: '1%'
  },
  listItemText: {
    fontSize: 16
  }
});

export default {...commonStyles, ...indexStyles}
