import {connect} from 'react-redux';
import { jobOperations } from '../../../state/jobs'
import JobsIndex from '../components/JobsIndex'
import { NavigationActions } from 'react-navigation'

function mapStateToProps(state, ownProps) {
  return {
    visibleJobTypes: state.jobs.index.visibleJobTypes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onUpdateSearchTerm: (value) => {
      dispatch(jobOperations.updateSearchTerm(value))
    },
    onToggleVisibleJob: (jobType) => {
      dispatch(jobOperations.toggleVisibleJob(jobType))
    },
    onSetDetailJob: (uuid) => {
      dispatch(jobOperations.setDetailJob(uuid))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobsIndex);
