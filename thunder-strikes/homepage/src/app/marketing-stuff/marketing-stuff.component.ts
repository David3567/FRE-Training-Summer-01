import { Component, Input, OnInit } from '@angular/core';
import { Marketing } from './interfaces/marketing';
import { MarketingService } from './services/marketing.service';

@Component({
  selector: 'app-marketing-stuff',
  templateUrl: './marketing-stuff.component.html',
  styleUrls: ['./marketing-stuff.component.css']
})
export class MarketingStuffComponent implements OnInit {
  marketingData: Marketing[] = [];
  constructor(private marketingService: MarketingService) {
    this.marketingData = this.marketingService.marketing;
  }

  ngOnInit(): void {
  }

}
