import actions from '../actions'

const toggleVisibleJob = actions.toggleVisibleJob
const updateSearchTerm = actions.updateSearchTerm
const setDetailJob = actions.setDetailJob
const initializeDetailState = actions.initializeDetailState
const editDetailState = actions.editDetailState
const incrementActiveStep = actions.incrementActiveStep
const decrementActiveStep = actions.decrementActiveStep
const changeActiveStep = actions.changeActiveStep

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
