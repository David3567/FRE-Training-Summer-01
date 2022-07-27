import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.scss'],
})
export class TodoitemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() deleteTodoId = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  abc() {
    this.deleteTodoId.emit(this.todo.id);
  }
}
