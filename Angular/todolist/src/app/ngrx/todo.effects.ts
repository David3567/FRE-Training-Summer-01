import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import * as TodoActions from './todo.actions';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Todo } from '../interfaces/todo.interface';

@Injectable()
export class TodoEffects {
  private baseUrl: string = 'https://jsonplaceholder.typicode.com';
  private todoPath: string = 'todos';

  loadTodoList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.loadTodolist),
      switchMap((_) => {
        return this.http
          .get<Todo[]>([this.baseUrl, this.todoPath].join('/'))
          .pipe(
            map((todolist: Todo[]) => {
              return TodoActions.loadTodoSuccess({ todolist });
            }),
            catchError((error) => {
              return of(TodoActions.loadTodoFailure({ error }));
            })
          );
      })
    );
  });
  addTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.addTodo),
      switchMap(({ todo: todofromfe }) => {
        return this.http
          .post<Todo>([this.baseUrl, this.todoPath].join('/'), todofromfe)
          .pipe(
            map((todofrombe: Todo) => {
              return TodoActions.addTodoSuccess({ todo: todofrombe });
            }),
            catchError((error) => {
              return of(TodoActions.addTodoFailure({ error }));
            })
          );
      })
    );
  });
  deleteTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.deleteTodo),
      switchMap(({ id }) => {
        return this.http
          .delete([this.baseUrl, this.todoPath, id].join('/'))
          .pipe(
            map((_) => {
              return TodoActions.deleteTodoSuccess({ id });
            }),
            catchError((error) => {
              return of(TodoActions.deleteTodoFailure({ error }));
            })
          );
      })
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly http: HttpClient
  ) {}
}
