import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoService } from '../services/todo.service';

import { DemoComponent } from './demo.component';
import { BehaviorSubject, of } from 'rxjs';

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;

  const mocktodolist: any = [{ id: 1234 }];
  class MockTodoService {
    todolist$ = of(mocktodolist);
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoComponent],
      providers: [{ provide: TodoService, useClass: MockTodoService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should transfer data to the todolist', () => {
    expect(component.todolist).toEqual([{ id: 1234 }]);
  });
});
