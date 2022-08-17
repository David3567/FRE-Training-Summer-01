import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieModuleComponent } from './movie-module.component';

describe('MovieModuleComponent', () => {
  let component: MovieModuleComponent;
  let fixture: ComponentFixture<MovieModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
