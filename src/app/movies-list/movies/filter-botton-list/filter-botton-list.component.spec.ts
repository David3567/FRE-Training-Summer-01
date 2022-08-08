import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBottonListComponent } from './filter-botton-list.component';

describe('FilterBottonListComponent', () => {
  let component: FilterBottonListComponent;
  let fixture: ComponentFixture<FilterBottonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterBottonListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterBottonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
