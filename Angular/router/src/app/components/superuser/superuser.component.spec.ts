import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperuserComponent } from './superuser.component';

describe('SuperuserComponent', () => {
  let component: SuperuserComponent;
  let fixture: ComponentFixture<SuperuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
