import { fork, all } from 'redux-saga/effects';
import { authSagas } from './auth';

const rootSaga = function* rootSaga() {
  yield all([
    ...authSagas,
  ])
}

export default rootSaga
