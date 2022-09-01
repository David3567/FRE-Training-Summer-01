import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'todolist'`, () => {
    expect(component.title).toBe('todolist');
  });

  it('should render title', () => {
    const view = fixture.nativeElement as HTMLElement;
    expect(view.querySelector('.content span')?.textContent).toContain(
      'todolist app running!'
    );
  });
});
