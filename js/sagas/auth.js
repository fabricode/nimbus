import { authTypes } from '../state/auth'
import { authSelectors } from '../state/auth'
import { put, takeLatest, call, select } from 'redux-saga/effects'
import authApi from '../api/services/auth'

function* fetchLogin (action) {
  try {
    let {username, password} = yield select(authSelectors.getUsernamePassword)
    const data = yield call(authApi.login, username, password)
    yield put({ type: authTypes.AUTHENTICATION_SUCCESS, data })
  } catch (e) {
    yield put({ type: authTypes.AUTHENTICATION_FAILURE, message: e.message })
  }
}

export const authSagas = [
  takeLatest(authTypes.AUTHENTICATION_ATTEMPT, fetchLogin)
];
