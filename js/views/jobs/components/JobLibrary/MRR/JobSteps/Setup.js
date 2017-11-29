import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';
import {Toggle, TextInput} from '../../../../../../components/FormElements'
import styles from '../../../../../../styles'

const renderToggle = ({ input: { onChange, value }, label}) => {
  return <Toggle onValueChange={onChange} value={value} label={label}/>
}
const renderInput = ({ input: { onChange, ...restInput }, label}) => {
  return <TextInput onChangeText={onChange} {...restInput} label={label} />
}
class Setup extends Component {
  render() {
    return (
      <View style={[styles.form]}>
        <Text>Im the Setup component</Text>
        <View style={[styles.formGroup]}>
          <Text style={[styles.formGroupLabel]}>Label for Group</Text>
          <Field name="exterior_waiver" label="Exterior Waiver" component={renderToggle} />
          <Field name="onsite_complete" label="Onsite Complete" component={renderToggle} />
          <Field name="interior_paint_satisfactory" label="Interior Paint Satisfactory" component={renderToggle} />
          <Field name="exterior_paint_satisfactory" label="Exterior Paint Satisfactory" component={renderToggle} />
          <Field name="cerificate_number" label="Certificate Number" component={renderInput}/>
        </View>
      </View>
    )
  }
}

export default reduxForm({
  form: 'MMRSetup',
  initialValues: {
    exterior_waiver: false,
    onsite_complete: false,
    interior_paint_satisfactory: true,
    exterior_paint_satisfactory: false,
    cerificate_number: "123"
  }
})(Setup)
