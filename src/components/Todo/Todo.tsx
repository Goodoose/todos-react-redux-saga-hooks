import React from 'react';
import './todo.css';
import {useDispatch} from 'react-redux';
import {deleteTodo, editChecked} from '../../store/actions';
import checked from "../../images/checked.svg"
import unchecked from "../../images/unchecked.svg"
import close from "../../images/close.svg"

interface TodoItemProps{
  todo: {
    id: string,
    title: string,
    checked: boolean
  }
}

export const TodoItem: React.FC<TodoItemProps> = props => {

  const dispatch = useDispatch();

  const handlerDelete = () => dispatch(deleteTodo(props.todo.id));

  const handlerChangeImage = () => dispatch(editChecked(props.todo.id, !props.todo.checked));

  return(
    <li key={props.todo.id} className="container__item">
      <hr className="container__line" />
      <div className="container__content">
        <a href="#" onClick={handlerChangeImage}>
          <img
            alt="checked"
            className="container__image--checked"
            src={props.todo.checked ? unchecked : checked}
          />
        </a>
        <div className="container__input--item">
          {props.todo.title}
        </div>
        <a
          href="#"
          className="container__image--hide"
          onClick={handlerDelete}
        >
          <img
            alt="close"
            className="container__image--close"
            src={close}
          />
        </a>
      </div>
    </li>
  );
}
