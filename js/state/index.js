import { combineReducers }  from 'redux';
import { reducer as form } from 'redux-form';
import home from './home';
import login from './login';
import drawer from './drawer';

export default combineReducers({
  form,
  login,
  home,
  drawer
});
