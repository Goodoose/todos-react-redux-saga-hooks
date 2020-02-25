import { FETCH_TODOS, ADD_TODO, DELETE_TODO, EDIT_CHECKED } from '../types';

export const fetchTodos = () => ({type: FETCH_TODOS});

export const addTodo = (title: string) => ({type: ADD_TODO, title});

export const deleteTodo = (id: string) => ({type: DELETE_TODO, id});

export const editChecked = (id: string, checked: boolean) => ({type: EDIT_CHECKED, id, checked});
