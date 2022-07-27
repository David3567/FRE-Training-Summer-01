import { Component, OnInit, ViewChild } from '@angular/core';
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
  // @ViewChild(TodoitemComponent) todoitemComponent!: TodoitemComponent;
  //* interplation: {{}}
  title: string = 'hello';
  //* property binding: []
  isdisabled = true;

  // todolist!: Todo[];
  todolist$!: Observable<Todo[]>;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe();

    this.todolist$ = this.todoService.todolist$;
  }

  //* event binding: ()
  setDisable() {
    this.isdisabled = !this.isdisabled;
  }

  deleteTodo(id: string) {
    this.todoService.deleteTodo(id);
  }
}

// news = [
//   {
//     id:12,
//     header: 'header',
//     content: 'string',
//     btncolor: 'red'
//   },
//   {
//     id:12,
//     header: 'header',
//     content: 'string',
//     btncolor: 'red'
//   },
//   {
//     id:12,
//     header: 'header',
//     content: 'string',
//     btncolor: 'red'
//   },
// ]
