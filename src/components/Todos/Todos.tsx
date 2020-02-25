import React, {useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import './todos.css';
import TodoItem from '../Todo';
import {addTodo, deleteTodo, fetchTodos} from '../../store/actions';

interface Todo {
  id: string,
  title: string,
  checked: boolean
}

interface StateProps{
  todoReducer: {
    todos: Todo[]
  }
}

export const Todos: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(fetchTodos())
  },[dispatch]);

  const todosState = useSelector<StateProps, Todo[]>(state => state.todoReducer.todos);

  const [ todos, setTodos ] = useState<Todo[]>(todosState);
  const [ todosFiltered, setTodosFiltered ] = useState<Todo[]>([]);

  useEffect( () => {
      setTodos(todosState);
    }
  );

  useEffect( () => {
      setTodosFiltered(todosState);
    }, [todosState]
  );

  const handleAddTodo = (title: string) => {
    if (title === 'ENTER') {
      dispatch(addTodo(value));
      setValue('');
    } else {
      setValue(title);
    }
  };

  const buttonAll = () =>  {
    setTodosFiltered(todos);
  };

  const buttonActive = () =>  {
    setTodosFiltered(todos.filter(todo => todo.checked === false));
  };

  const buttonCompleted = () => {
    setTodosFiltered(todos.filter(todo => todo.checked === true));
  };

  const buttonClearCompleted = () =>  {
    todos.forEach(todo => {
      if(todo.checked){
        dispatch(deleteTodo(todo.id));
      }
    })
  };

  return(
    <div>
      <div className="container">
        <input
          className="container__input"
          type='text'
          value={value}
          name='inputValue'
          placeholder="What needs to be done?"
          onKeyDown={event => event.key === 'Enter'
            && handleAddTodo('ENTER')
            && event.preventDefault()}
          onChange={event => handleAddTodo(event.target.value)}
        />
        <ul className="container_list">
          {
            todosFiltered.map(todo => (
              <div key={todo.id}>
                <TodoItem todo={todo}/>
              </div>
            ))
          }
        </ul>

        <hr className="container__line" />
        <div className="container__footer">
          <div className="container__counter">
            {todosFiltered.length}
            {' '}
            {todosFiltered.length === 1 ? 'item left' : 'items left'}
          </div>

          <div className="container__buttons--list">
            <button
              type="button"
              name="All"
              className="container__button"
              onClick={buttonAll}
            >
              All
            </button>

            <button
              type="button"
              className="container__button"
              onClick={buttonActive}
            >
              Active
            </button>

            <button
              type="button"
              className="container__button"
              onClick={buttonCompleted}
            >
              Completed
            </button>
          </div>
          <div className="container__button--completed">
            <button
              type="button"
              className="container__button"
              onClick={buttonClearCompleted}
            >
              Clear completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
