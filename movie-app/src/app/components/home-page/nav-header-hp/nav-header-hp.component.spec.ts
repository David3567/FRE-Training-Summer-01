import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHeaderHPComponent } from './nav-header-hp.component';

describe('NavHeaderHPComponent', () => {
  let component: NavHeaderHPComponent;
  let fixture: ComponentFixture<NavHeaderHPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavHeaderHPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavHeaderHPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
