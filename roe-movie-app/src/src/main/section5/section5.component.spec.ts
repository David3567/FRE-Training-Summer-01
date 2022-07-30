import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section5Component } from './section5.component';

describe('Section5Component', () => {
  let component: Section5Component;
  let fixture: ComponentFixture<Section5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
