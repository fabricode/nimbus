import flex from './flex';
import size from './size';
import color from './color';
import form from './form';
import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
  ...flex,
  ...size,
  ...color,
  ...form
})

export default commonStyles
