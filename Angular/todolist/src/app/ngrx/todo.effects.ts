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

  loadTodoList$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(TodoActions.loadTodolist),
      switchMap((_) => {
        console.log('effect');
        return this.http.get([this.baseUrl, this.todoPath].join('/')).pipe(
          <any>map((todolist: Todo[]) => {
            return TodoActions.loadTodoSuccess({ todolist });
          }),
          catchError((error) => {
            return of(TodoActions.loadTodoFailure({ error }));
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
