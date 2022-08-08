import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'makeShort',
})
export class ShortPipe implements PipeTransform {
  transform(value: any, length: number): any {
    return value.length > length
      ? value.slice(0, length) + '...'
      : value;
  }
}

