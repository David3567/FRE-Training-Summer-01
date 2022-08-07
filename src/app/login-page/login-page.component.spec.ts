// eslint-disable-next-line import/no-unresolved
import { ComponentFixture, TestBed } from '@angular/core/testing';

// eslint-disable-next-line import/no-unresolved
import { LoginPageComponent } from './login-page.component';

// eslint-disable-next-line no-undef
describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  // eslint-disable-next-line no-undef
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // eslint-disable-next-line no-undef
  it('should create', () => {
    // eslint-disable-next-line no-undef
    expect(component).toBeTruthy();
  });
});
