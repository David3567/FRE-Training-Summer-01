import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassparamComponent } from './passparam.component';

describe('PassparamComponent', () => {
  let component: PassparamComponent;
  let fixture: ComponentFixture<PassparamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassparamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassparamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
