import { Injectable } from '@angular/core';
import { SharedApiDataService } from './shared-api-data.service';

@Injectable({
  providedIn: 'root'
})
export class ImageTemplateService {
  readonly sizes:string[] = [
    "(min-width: 92px)  and (max-width: 153px)  92px,", 
    "(min-width: 154px) and (max-width: 184px) 154px,", 
    "(min-width: 185px) and (max-width: 341px) 185px,", 
    "(min-width: 342px) and (max-width: 499px) 342px,", 
    "(min-width: 500px) and (max-width: 779px) 500px,",
    "(min-width: 780px) 780px,", 
    "92px"
  ];
  constructor(private readonly sharedApiService: SharedApiDataService) { }

  getSizes(){
    const sizes = `
    (min-width: 92px) and (max-width: 153px)   92px, 
    (min-width: 154px) and (max-width: 184px) 154px, 
    (min-width: 185px) and (max-width: 341px) 185px, 
    (min-width: 342px) and (max-width: 499px) 342px, 
    (min-width: 500px) and (max-width: 779px) 500px,
    (min-width: 780px) 780px, 
    92px"`;
    return sizes; 
  }
}
