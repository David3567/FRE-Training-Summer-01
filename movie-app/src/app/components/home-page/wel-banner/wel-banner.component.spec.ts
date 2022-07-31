import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelBannerComponent } from './wel-banner.component';

describe('WelBannerComponent', () => {
  let component: WelBannerComponent;
  let fixture: ComponentFixture<WelBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
