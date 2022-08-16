import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieBrowseItemComponent } from './movie-browse-item.component';

describe('MovieBrowseItemComponent', () => {
  let component: MovieBrowseItemComponent;
  let fixture: ComponentFixture<MovieBrowseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieBrowseItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieBrowseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
