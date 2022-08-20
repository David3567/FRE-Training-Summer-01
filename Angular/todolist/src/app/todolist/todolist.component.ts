import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';
import { TodoService } from '../services/todo.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as TodoSelectors from '../ngrx/todo.selectors';
import * as TodoActions from '../ngrx/todo.actions';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  // @ViewChild('inputbox') inputbox!: ElementRef;

  todo: Todo = {
    title: '',
    userId: 2,
    completed: false,
  };

  todolist$!: Observable<Todo[]>;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(TodoActions.loadTodolist());
    this.todolist$ = this.store.select(TodoSelectors.getTodoList);
  }

  deleteTodo(id: string) {
    this.store.dispatch(TodoActions.deleteTodo({ id }));
  }

  addTodo() {
    this.store.dispatch(TodoActions.addTodo({ todo: this.todo }));
  }
}
