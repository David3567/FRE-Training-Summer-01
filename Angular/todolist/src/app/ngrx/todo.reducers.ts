import { createReducer, on } from '@ngrx/store';
import { TodoState } from '../interfaces/todo.interface';
import * as TodoActions from './todo.actions';

const todoState: TodoState = {
  todolist: [],
  error: '',
};

export const todoReducer = createReducer(
  todoState,
  // on(TodoActions.initTodolist, (state) => {
  //   return { ...state };
  // }),
  //* ~~~~~~~~~~~~~~~~~~~~~ load todos
  on(TodoActions.loadTodoSuccess, (state, { todolist }) => {
    return {
      ...state,
      todolist: [...todolist].reverse(),
    };
  }),
  on(TodoActions.loadTodoFailure, (state, { error }) => {
    return {
      ...state,
      todolist: [],
      error,
    };
  })
);
