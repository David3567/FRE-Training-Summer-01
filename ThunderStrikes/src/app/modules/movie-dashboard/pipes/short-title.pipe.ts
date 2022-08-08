import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortTitle'
})
export class ShortTitlePipe implements PipeTransform {
  private length = 20;
  transform(value: string, ...args: unknown[]): unknown {
    if(value.length > this.length){
      return value.slice(0, this.length)+"...";
    }
    return value;
  }

}
