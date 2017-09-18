import { combineReducers }  from 'redux';
import { reducer as form } from 'redux-form';
import home from './home';
import auth from './auth';
import drawer from './drawer';

export default combineReducers({
  form,
  auth,
  home,
  drawer
});
