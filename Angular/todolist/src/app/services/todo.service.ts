import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Todo } from '../interfaces/todo.interface';

@Injectable()
export class TodoService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com';
  todoPath: string = 'todos';

  private todolist: Todo[] = [];
  todolist$ = new BehaviorSubject(this.todolist);

  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get([this.baseUrl, this.todoPath].join('/')).pipe(
      <any>tap((todos: Todo[]) => {
        this.todolist = [...todos.reverse()];
        this.todolist$.next(this.todolist);
      })
    );
  }

  addTodo(todo: Todo) {
    return this.http.post([this.baseUrl, this.todoPath].join('/'), todo).pipe(
      tap((todofromBackend: any) => {
        this.todolist = [todofromBackend, ...this.todolist];
        this.todolist$.next(this.todolist);
      })
    );
  }

  deleteTodo(id: string) {
    this.todolist = this.todolist.filter((todo: any) => +todo.id !== +id);
    this.todolist$.next(this.todolist);

    return this.http.delete([this.baseUrl, this.todoPath, id].join('/'));
  }
}
