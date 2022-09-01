import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Todo } from '../interfaces/todo.interface';

import { TodoitemComponent } from './todoitem.component';

describe('TodoitemComponent', () => {
  let component: TodoitemComponent;
  let fixture: ComponentFixture<TodoitemComponent>;

  let todolistcomponent: MockTodolistComponent;
  let todolistfixture: ComponentFixture<MockTodolistComponent>;

  @Component({
    selector: 'app-todolist',
    template: `<app-todoitem [todo]="todo"></app-todoitem>`,
  })
  class MockTodolistComponent {
    todo: Todo = {
      title: '',
      userId: 2,
      completed: false,
    };
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoitemComponent, MockTodolistComponent],
    }).compileComponents();
  });
  // beforeEach(() => {
  //   fixture = TestBed.createComponent(TodoitemComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });
  beforeEach(() => {
    todolistfixture = TestBed.createComponent(MockTodolistComponent);
    component = todolistfixture.debugElement.children[0].componentInstance;
    todolistfixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  it('should get the obj pass by @Input', () => {
    expect(component.todo).toEqual({
      title: '',
      userId: 2,
      completed: false,
    });
  });
});
