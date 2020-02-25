export const FETCH_TODOS_ASYNC = 'FETCH_TODOS_ASYNC';
export const FETCH_TODOS = 'FETCH_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_ASYNC = 'ADD_TODO_ASYNC';
export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_TODO_ASYNC = 'DELETE_TODO_ASYNC';
export const EDIT_CHECKED = 'EDIT_CHECKED';
export const EDIT_CHECKED_ASYNC = 'EDIT_CHECKED_ASYNC';

export interface Todo {
  id: string;
  title: string;
  checked: boolean;
}

export interface TodoState {
  todos: Todo[]
}

interface fetchTodosAsync {
  type: typeof FETCH_TODOS_ASYNC;
  payload: Todo[];
}

interface addTodo {
  type: typeof ADD_TODO_ASYNC;
  payload: Todo;
}

interface deleteTodo {
  type: typeof DELETE_TODO_ASYNC;
  payload: Todo;
}

interface editChecked {
  type: typeof EDIT_CHECKED_ASYNC;
  payload: Todo;

}

export type TodosTypes = fetchTodosAsync | addTodo | deleteTodo | editChecked;
