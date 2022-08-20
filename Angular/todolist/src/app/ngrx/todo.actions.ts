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

//* ~~~~~~~~~~~~~~~~ Add Todo
export const addTodo = createAction(
  '[TodoList] Add Todo',
  props<{ todo: Todo }>()
);

export const addTodoSuccess = createAction(
  '[TodoList] Add Todo Success',
  props<{ todo: Todo }>()
);
export const addTodoFailure = createAction(
  '[TodoList] Add Todo Failure',
  props<{ error: string }>()
);

//* ~~~~~~~~~~~~~~~~ delete Todo
export const deleteTodo = createAction(
  '[TodoList] Delete Todo',
  props<{ id: string }>()
);

export const deleteTodoSuccess = createAction(
  '[TodoList] Delete Todo Success',
  props<{ id: string }>()
);
export const deleteTodoFailure = createAction(
  '[TodoList] Delete Todo Failure',
  props<{ error: string }>()
);
