import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovielistUserComponent } from './movielist-user.component';

describe('MovielistUserComponent', () => {
  let component: MovielistUserComponent;
  let fixture: ComponentFixture<MovielistUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovielistUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovielistUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
