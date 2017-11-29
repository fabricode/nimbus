import {connect} from 'react-redux';
import { jobOperations } from '../../../state/jobs'
import JobsDetail from '../components/JobsDetail'
import { NavigationActions } from 'react-navigation'

function mapStateToProps(state, ownProps) {
  return {
    uuid: state.jobs.detail.uuid
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSetDetailJob: (uuid) => {
      dispatch(jobOperations.setDetailJob(uuid))
    },
    onInitializeDetailState: (state_tree) => {
      dispatch(jobOperations.initializeDetailState(state_tree))
    },
    onEditDetailState: (uuid) => {
      dispatch(jobOperations.editDetailState(update))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobsDetail);
