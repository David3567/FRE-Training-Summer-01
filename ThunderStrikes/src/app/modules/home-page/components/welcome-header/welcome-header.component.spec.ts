import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeHeaderComponent } from './welcome-header.component';

describe('WelcomeHeaderComponent', () => {
  let component: WelcomeHeaderComponent;
  let fixture: ComponentFixture<WelcomeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
