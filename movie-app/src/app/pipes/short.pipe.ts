import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'makeShort',
})
export class ShortPipe implements PipeTransform {
  stringLength: number = 15;
  transform(value: any, args?: any): any {
    return value.length > this.stringLength
      ? value.slice(0, this.stringLength) + '...'
      : value;
  }
}
