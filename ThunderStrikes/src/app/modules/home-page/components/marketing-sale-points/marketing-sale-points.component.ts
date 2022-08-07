import { Component, OnInit } from '@angular/core';
import { Marketing } from '../homepage/interfaces/marketing';
import { MarketingService } from '../../services/marketing.service';

@Component({
  selector: 'app-marketing-sale-points',
  templateUrl: './marketing-sale-points.component.html',
  styleUrls: ['./marketing-sale-points.component.scss']
})
export class MarketingSalePointsComponent implements OnInit {

  marketingData: Marketing[] = [];
  constructor(private marketingService: MarketingService) {
    this.marketingData = this.marketingService.marketing;
  }

  ngOnInit(): void {
    }

}

