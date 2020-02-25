import { takeEvery, put } from 'redux-saga/effects';
import { ADD_TODO, ADD_TODO_ASYNC } from '../types';

interface Data {
  name: string
}

const addTodo = async (title: string) => {
  const response = await fetch('https://rn-todo-new.firebaseio.com/todos.json', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({title, checked: false}),
  });
  const data: Data = await response.json();
  return data.name;
};

interface ActionAdd {
  type: string,
  title: string,
  checked: boolean,
}

export function* addTodoAsync(action: ActionAdd) {
  const id = yield addTodo(action.title);
  const title = action.title;
  yield put({ type: ADD_TODO_ASYNC, payload: ({ id, title, checked: false }) })
}

export function* addTodoSaga() {
  yield takeEvery(ADD_TODO, addTodoAsync);
}
