import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowPlayingComponent } from './now-playing.component';

describe('NowPlayingComponent', () => {
  let component: NowPlayingComponent;
  let fixture: ComponentFixture<NowPlayingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NowPlayingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NowPlayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
