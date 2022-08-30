import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  todolist: any = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.todolist$.subscribe((todos: any) => {
      this.todolist = todos;
    });
  }
}
