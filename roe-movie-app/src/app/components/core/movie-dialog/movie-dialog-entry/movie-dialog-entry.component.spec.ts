import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDialogEntryComponent } from './movie-dialog-entry.component';

describe('MovieDialogEntryComponent', () => {
  let component: MovieDialogEntryComponent;
  let fixture: ComponentFixture<MovieDialogEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDialogEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDialogEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
