import { Injectable } from '@angular/core';
import { Marketing } from '../interfaces/marketing';

@Injectable({
  providedIn: 'root'
})
export class MarketingService {
  marketing: Marketing[] = [
    {
      id: 0,
      header: "The best streaming service money can buy.",
      description: "Stream exclusive content you wont find elsewhere.",
      image: "../../../assets/best service.png",
      imageWidth: 605,
      imageHeight: 603,
    },
    {
      id: 1,
      header: "Stream on any device you want.",
      description: "Up to 5 users can watch at the same time.",
      image: "../../../assets/responsive_design.png",
      imageWidth: 1827,
      imageHeight: 1484,
    },
    {
      id: 2,
      header: "Strikingly beautiful.",
      description: "Watch 4k HD programs on demand.",
      image: "../../../assets/4k photo.png",
      imageWidth: 505,
      imageHeight: 268,
    },
    {
      id: 3,
      header: "No hidden fees.",
      description: "No equipment rentals, or installation appointments. Switch plans or cancel anytime.",
      image: "../../../assets/hidden fees.png",
      imageWidth: 1335,
      imageHeight: 1335,
    },
  ];
  constructor() { }
}
