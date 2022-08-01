import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingStuffComponent } from './marketing-stuff.component';

describe('MarketingStuffComponent', () => {
  let component: MarketingStuffComponent;
  let fixture: ComponentFixture<MarketingStuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingStuffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketingStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
