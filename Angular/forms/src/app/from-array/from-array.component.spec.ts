import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromArrayComponent } from './from-array.component';

describe('FromArrayComponent', () => {
  let component: FromArrayComponent;
  let fixture: ComponentFixture<FromArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
