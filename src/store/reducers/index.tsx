import {
  ADD_TODO_ASYNC,
  FETCH_TODOS_ASYNC,
  DELETE_TODO_ASYNC,
  EDIT_CHECKED_ASYNC,
  TodoState,
  TodosTypes
} from '../types';

export const initialState: TodoState = {
  todos: []
};

export function todoReducer(
  state = initialState,
  action: TodosTypes
): TodoState {
  switch(action.type){
    case FETCH_TODOS_ASYNC:
      return {
        ...state.todos, todos: action.payload
      };
    case ADD_TODO_ASYNC:
      return {
        ...state.todos, todos: [ ...state.todos, action.payload ]
      };
    case DELETE_TODO_ASYNC:
      return {
        ...state.todos, todos: [ ...state.todos.filter(todo => todo.id !== action.payload.id) ]
      };
    case EDIT_CHECKED_ASYNC:
      return {
        ...state.todos, todos: [
          ...state.todos.map(todo => {
            if(todo.id === action.payload.id){
              todo.checked = action.payload.checked
            }
            return todo;
          })
        ]
      };
    default: return state;
  }
}
