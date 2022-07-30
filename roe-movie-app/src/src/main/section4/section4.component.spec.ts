import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section4Component } from './section4.component';

describe('Section4Component', () => {
  let component: Section4Component;
  let fixture: ComponentFixture<Section4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
