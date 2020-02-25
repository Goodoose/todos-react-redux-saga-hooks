import { all } from 'redux-saga/effects';
import { fetchTodosSaga } from './sagaFetch';
import { addTodoSaga } from './sagaAdd';
import { deleteTodoSaga } from './sagaDelete';
import { editCheckedSaga } from "./sagaEditChecked";

export default function* rootSaga() {
  yield all([
    fetchTodosSaga(),
    addTodoSaga(),
    deleteTodoSaga(),
    editCheckedSaga()
  ])
}
