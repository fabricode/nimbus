import {connect} from 'react-redux';
import { jobOperations } from '../../../../state/jobs'
import MRR from '../../components/JobLibrary/MRR'

function mapStateToProps(state, ownProps) {
  return {
    uuid: state.jobs.detail.uuid,
    activeStep: state.jobs.detail_state.active_step
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onInitializeDetailState: (state_tree) => {
      dispatch(jobOperations.initializeDetailState(state_tree))
    },
    onEditDetailState: (uuid) => {
      dispatch(jobOperations.editDetailState(update))
    },
    onIncrementActiveStep: () => {
      dispatch(jobOperations.incrementActiveStep())
    },
    onDecrementActiveStep: () => {
      dispatch(jobOperations.decrementActiveStep())
    },
    onChangeActiveStep: (step_index) => {
      dispatch(jobOperations.changeActiveStep(step_index))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MRR);
