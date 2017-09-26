import { combineReducers }  from 'redux';
import { reducer as form } from 'redux-form';
import jobs from './jobs';
import auth from './auth';

export default combineReducers({
  form,
  auth,
  jobs,
});
