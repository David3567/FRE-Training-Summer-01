import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowPlayingMoviesComponent } from './now-playing-movies.component';

describe('NowPlayingMoviesComponent', () => {
  let component: NowPlayingMoviesComponent;
  let fixture: ComponentFixture<NowPlayingMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NowPlayingMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NowPlayingMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
