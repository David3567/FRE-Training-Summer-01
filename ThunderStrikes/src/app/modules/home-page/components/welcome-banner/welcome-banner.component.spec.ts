import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeBannerComponent } from './welcome-banner.component';

describe('WelcomeBannerComponent', () => {
  let component: WelcomeBannerComponent;
  let fixture: ComponentFixture<WelcomeBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
