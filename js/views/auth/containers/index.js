import {connect} from 'react-redux';
import { authOperations } from '../../../state/auth'
import Auth from '../components'

function mapStateToProps(state, ownProps) {
  return {
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onUpdateField: (field, value) => {
      dispatch(authOperations.updateField(field, value))
    },
    onLogin: () => {
      dispatch(authOperations.login())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
