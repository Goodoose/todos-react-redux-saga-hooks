import { put, takeEvery } from 'redux-saga/effects';
import { FETCH_TODOS, FETCH_TODOS_ASYNC } from '../types';

const fetchData = async () => {
  const response = await fetch('https://rn-todo-new.firebaseio.com/todos.json', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  });
  const data = await response.json();
  return Object.keys(data).map(key => ({...data[key], id: key}));
};

export function* fetchTodosAsync() {
  const payload = yield fetchData();
  yield put({ type: FETCH_TODOS_ASYNC, payload });
}

export function* fetchTodosSaga() {
  yield takeEvery(FETCH_TODOS, fetchTodosAsync)
}
