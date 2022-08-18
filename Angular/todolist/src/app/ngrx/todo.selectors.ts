import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Todo, TodoState } from '../interfaces/todo.interface';

export const selectTodos = createFeatureSelector<TodoState>('todos');

export const getTodoList = createSelector(
  selectTodos,
  (state: TodoState): Todo[] => state.todolist
);
