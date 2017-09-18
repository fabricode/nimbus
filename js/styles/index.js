import flexDefaults from './flexDefaults';
import sizeDefaults from './sizeDefaults';
import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
  ...flexDefaults,
  ...sizeDefaults
})

export default commonStyles
