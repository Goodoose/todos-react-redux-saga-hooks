import { takeEvery, put } from 'redux-saga/effects';
import { EDIT_CHECKED_ASYNC, EDIT_CHECKED } from '../types';

const editChecked = async (id: string, checked: boolean) => {
  await fetch(`https://rn-todo-new.firebaseio.com/todos/${id}.json`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({checked}),
  });
};

interface ActionAdd {
  type: string,
  id: string,
  checked: boolean
}

export function* addTodoAsync(action: ActionAdd) {
  yield editChecked(action.id, action.checked);
  const id = action.id;
  const checked = action.checked;
  yield put({ type: EDIT_CHECKED_ASYNC, payload: ({ id, checked }) })
}

export function* editCheckedSaga() {
  yield takeEvery(EDIT_CHECKED, addTodoAsync);
}
