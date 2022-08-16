import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieBrowseComponent } from './movie-browse.component';

describe('MovieBrowseComponent', () => {
  let component: MovieBrowseComponent;
  let fixture: ComponentFixture<MovieBrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieBrowseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
