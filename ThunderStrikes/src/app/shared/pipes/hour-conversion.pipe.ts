import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hourConversion'
})
export class HourConversionPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if(value < 60) return `${value} min`;
    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    if(minutes === 0){
      if(hours === 1) return `${hours} hr`;
      else if(hours > 1) return `${hours} hrs`;
    }
    return `${hours} hr ${minutes} min`;

  }

}
