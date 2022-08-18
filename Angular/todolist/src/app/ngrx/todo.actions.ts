import { createAction, props } from '@ngrx/store';
import { Todo } from '../interfaces/todo.interface';

// export const initTodolist = createAction('[TodoList] Initialize Todolist');

//* ~~~~~~~~~~~~~~~~ Load Todos
export const loadTodolist = createAction('[TodoList] Load Todolist');

export const loadTodoSuccess = createAction(
  '[TodoList] Load Todolist Success',
  props<{ todolist: Todo[] }>()
);
export const loadTodoFailure = createAction(
  '[TodoList] Load Todolist Failure',
  props<{ error: string }>()
);
