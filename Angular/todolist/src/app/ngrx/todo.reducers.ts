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
  }),
  //* ~~~~~~~~~~~~~~~~~~~~~ add todos
  on(TodoActions.addTodoSuccess, (state, { todo }) => {
    return {
      ...state,
      todolist: [todo, ...state.todolist],
    };
  }),
  on(TodoActions.addTodoFailure, (state, { error }) => {
    return {
      ...state,
      todolist: [],
      error,
    };
  }),
  //* ~~~~~~~~~~~~~~~~~~~~~ delete todos
  on(TodoActions.deleteTodoSuccess, (state, { id }) => {
    const newlist = state.todolist.filter((todo: any) => +todo.id !== +id);
    return {
      ...state,
      todolist: newlist,
    };
  }),
  on(TodoActions.deleteTodoFailure, (state, { error }) => {
    return {
      ...state,
      todolist: [],
      error,
    };
  })
);
