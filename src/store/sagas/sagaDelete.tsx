import { takeEvery, put } from 'redux-saga/effects';
import {DELETE_TODO, DELETE_TODO_ASYNC} from '../types';

const deleteTodo = async (id: string) => {
  await fetch(`https://rn-todo-new.firebaseio.com/todos/${id}.json`, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'},
  });
};

interface ActionDelete {
  type: string,
  id: string
}

export function* deleteTodoAsync(action: ActionDelete){
  yield deleteTodo(action.id);
  const id = action.id;
  yield put({ type: DELETE_TODO_ASYNC, payload: ({id}) })
}

export function* deleteTodoSaga() {
  yield takeEvery(DELETE_TODO, deleteTodoAsync);

}
