import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpdatePageComponent } from './user-update-page.component';

describe('UserUpdatePageComponent', () => {
  let component: UserUpdatePageComponent;
  let fixture: ComponentFixture<UserUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserUpdatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
