import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetValidatorComponent } from './set-validator.component';

describe('SetValidatorComponent', () => {
  let component: SetValidatorComponent;
  let fixture: ComponentFixture<SetValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
