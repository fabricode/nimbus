import { combineReducers } from 'redux';
import types from '../types';

const initialState = {
  authenticated: false,
  token: '',
  username: '',
  usernameError: '',
  password: '',
  passwordError: '',
  attempted: false,
  error: false,
  errorText: '',
  attempts: 0,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTHENTICATION_SUCCESS:
      return {...state, authenticated: true}
    case types.AUTHENTICATION_FAILURE:
      let { error, errorText, usernameError, passwordError } = action.payload
      return {...state, attempted: true, error, errorText, usernameError, passwordError}
    case types.AUTHENTICATION_ATTEMPT:
      return {...state, attempted: true, attempts: state.attempts + 1}
    case types.UPDATE_FIELD:
      return {...state, [action.payload.field]: action.payload.value}
    default:
      return state
  }
}
export default auth
