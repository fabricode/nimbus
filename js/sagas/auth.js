import { authTypes } from '../state/auth'
import { authSelectors } from '../state/auth'
import { put, takeLatest, takeEvery, call, select, fork } from 'redux-saga/effects'
import authApi from '../api/services/auth'

const fetchLogin = function* fetchLogin () {
  try {
    let {username, password} = yield select(authSelectors.getUsernamePassword)
    if(username && password){
      const resolvedCall = yield call(authApi.login, username, password)
      if(resolvedCall.network_error){
        yield put({ type: authTypes.AUTHENTICATION_FAILURE, payload: {error: true, errorText: "Network Error"} })
      } else {
        let response = resolvedCall.response
        if(response.data.errors) {
          yield put({ type: authTypes.AUTHENTICATION_FAILURE, payload: {error: true, errorText: "Incorrect Email or Password"} })
        } else if(response.data.Message == "Hello World!") {
          yield put({ type: authTypes.AUTHENTICATION_SUCCESS, response })
        }
      }
    } else {
      let usernameError = username ? false : "Enter a valid username"
      let passwordError = password ? false : "Enter a valid password"
      yield put({ type: authTypes.AUTHENTICATION_FAILURE, payload: {usernameError, passwordError} })
    }
  } catch (error) {
    yield put({ type: authTypes.AUTHENTICATION_FAILURE, payload: {error: true, errorText: "Network Error"}})
  }

}

export const authSagas = [
  takeEvery(authTypes.AUTHENTICATION_ATTEMPT, fetchLogin)
];
