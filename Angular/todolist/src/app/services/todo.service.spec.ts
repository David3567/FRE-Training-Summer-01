import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TodoService } from './todo.service';
import { of } from 'rxjs';
import { Todo } from '../interfaces/todo.interface';

describe('TodoService', () => {
  let service: TodoService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(TodoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should have getTodos method', () => {
    spyOn(service, 'getTodos').and.returnValue(of(123));
    service.getTodos().subscribe(console.log);
    expect(service.getTodos).toHaveBeenCalled();
  });
  it('should send post request and get the response', () => {
    const todo: Todo = {
      userId: 1,
      id: 7,
      title: 'illo expedita consequatur quia in',
      completed: false,
    };

    service.addTodo(todo).subscribe((data) => {
      // expect(data).toEqual(todo);
    }, fail);

    const url = [service.baseUrl, service.todoPath].join('/');
    const req = httpTestingController.expectOne(url);
    // req.flush(todo);

    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(todo);
  });
});
