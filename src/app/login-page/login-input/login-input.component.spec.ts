// eslint-disable-next-line import/no-unresolved
import { ComponentFixture, TestBed } from '@angular/core/testing';

// eslint-disable-next-line import/no-unresolved
import { LoginInputComponent } from './login-input.component';

// eslint-disable-next-line no-undef
describe('LoginInputComponent', () => {
  let component: LoginInputComponent;
  let fixture: ComponentFixture<LoginInputComponent>;

  // eslint-disable-next-line no-undef
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginInputComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // eslint-disable-next-line no-undef
  it('should create', () => {
    // eslint-disable-next-line no-undef
    expect(component).toBeTruthy();
  });
});
