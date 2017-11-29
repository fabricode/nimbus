import types from '../types'
import { NavigationActions } from 'react-navigation'

const toggleVisibleJob = (jobType) => ({
  type: types.TOGGLE_VISIBLE_JOB,
  payload: {jobType}
})
const updateSearchTerm = (searchTerm) => ({
  type: types.UPDATE_SEARCH_TERM,
  payload: {searchTerm}
})

const setDetailJob = (uuid) => ({
  type: types.SET_DETAIL_JOB,
  payload: {uuid}
})

const initializeDetailState = (state_tree) => ({
  type: types.INITIALIZE_DETAIL_STATE,
  payload: {state_tree}
})

const editDetailState = (update) => ({
  type: types.EDIT_DETAIL_STATE,
  payload: {update}
})

const incrementActiveStep = () => ({
  type: types.INCREMENT_ACTIVE_STEP
})
const decrementActiveStep = () => ({
  type: types.DECREMENT_ACTIVE_STEP
})
const changeActiveStep = (step_index) => ({
  type: types.CHANGE_ACTIVE_STEP,
  payload: {step_index}
})

export default {
  toggleVisibleJob,
  updateSearchTerm,
  setDetailJob,
  initializeDetailState,
  editDetailState,
  incrementActiveStep,
  decrementActiveStep,
  changeActiveStep
}
