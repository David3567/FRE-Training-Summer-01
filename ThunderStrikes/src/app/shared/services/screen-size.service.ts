import { Injectable } from '@angular/core';
import { ScreenSize } from '../interfaces/screen-sizes.interface';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {
  readonly screenSizes: ScreenSize = {mobile: "(max-width: 649px)", tablet: "(min-width: 650px) and (max-width: 1023px)", computer: "(min-width: 1024px)"};
  constructor() { }
  get screenSizeUsed(){
    let screenSize: string = "";
    for(let device in this.screenSizes){
      const size = window.matchMedia(this.screenSizes[device as keyof ScreenSize]).matches;
      if(size){
        screenSize = device;
        break;
      }
    }
    return screenSize;
  }
}
