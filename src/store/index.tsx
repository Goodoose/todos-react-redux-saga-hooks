import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { todoReducer } from './reducers';
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const rootReducers = combineReducers({
  todoReducer,
});

export default createStore(
  rootReducers,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
