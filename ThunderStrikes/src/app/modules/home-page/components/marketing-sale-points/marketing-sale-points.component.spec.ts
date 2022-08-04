import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingSalePointsComponent } from './marketing-sale-points.component';

describe('MarketingSalePointsComponent', () => {
  let component: MarketingSalePointsComponent;
  let fixture: ComponentFixture<MarketingSalePointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingSalePointsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketingSalePointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
