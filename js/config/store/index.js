import { AsyncStorage } from 'react-native';
import devTools from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../../state';
import promise from './promise';
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../../sagas'
import { composeWithDevTools } from 'remote-redux-devtools';

export default function configureStore(initialState) {

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  ));

  sagaMiddleware.run(rootSaga)

  return store;
}
