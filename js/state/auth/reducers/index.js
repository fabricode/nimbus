import { combineReducers } from 'redux';
import types from '../types';

const initialState = {
  authenticated: false,
  token: '',
  username: '',
  password: '',
  attempted: false,
  attempts: 0,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTHENTICATION_SUCCESS:
      debugger
      return state
    case types.AUTHENTICATION_FAILURE:
      debugger
      return state
    case types.AUTHENTICATION_ATTEMPT:
      return {...state, attempted: true}
    case types.UPDATE_FIELD:
      return {...state, [action.payload.field]: action.payload.value}
    default:
      return state
  }
}
export default auth
