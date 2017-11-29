import { combineReducers } from 'redux';
import types from '../types';

const initialState = {
  index: {
    'searchTerm': null,
    'jobTypes': [],
    'visibleJobTypes': {},
  },
  detail: {
    'uuid': null,
  },
  detail_state: {
    'active_step': 0
  }
};

const jobs = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_VISIBLE_JOB:
      return {
        ...state, index: {
          ...state.index, visibleJobTypes: {
            ...state.index.visibleJobTypes, [action.payload.jobType]: !state.index.visibleJobTypes[action.payload.jobType]
            }
          }
        }
    case types.UPDATE_SEARCH_TERM:
      return {
        ...state, index: {
          ...state.index, searchTerm: action.payload.searchTerm
        }
      }
    case types.SET_DETAIL_JOB:
      return {
        ...state, detail: {
          ...state.detail, uuid: action.payload.uuid
        }
      }
    case types.INITIALIZE_DETAIL_STATE:
      return {
        ...state, detail_state: action.payload.state_tree
        }
    case types.EDIT_DETAIL_STATE:
      return {
        ...state, detail_state: action.payload.update(state.detail_state)
      }
    case types.INCREMENT_ACTIVE_STEP:
      let incremented_active_step = state.detail_state.active_step + 1
      return {
        ...state,
        detail_state: {
          ...state.detail_state,
          active_step: incremented_active_step
        }
      }
    case types.DECREMENT_ACTIVE_STEP:
      let decremented_active_step = state.detail_state.active_step > 0 ? state.detail_state.active_step - 1 : 0
      return {
        ...state,
        detail_state: {
          ...state.detail_state,
          active_step: decremented_active_step,
        },
      };
    case types.CHANGE_ACTIVE_STEP:
      let new_active_step = parseInt(action.payload.step_index)
      return {
        ...state,
        detail_state: {
          ...state.detail_state,
          active_step: new_active_step
        }
      }
    default:
      return state
  }
}
export default jobs
