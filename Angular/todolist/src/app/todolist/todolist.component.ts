import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';
import { TodoitemComponent } from '../todoitem/todoitem.component';
import { TodoService } from '../services/todo.service';
import { Observable } from 'rxjs';

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

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe();

    this.todolist$ = this.todoService.todolist$;
  }

  deleteTodo(id: string) {
    this.todoService.deleteTodo(id).subscribe();
  }

  addTodo() {
    this.todoService.addTodo(this.todo).subscribe();
  }
}
