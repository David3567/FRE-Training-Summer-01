import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDescription'
})
export class ShortDescriptionPipe implements PipeTransform {
  private length = 120;
  transform(value: string, ...args: unknown[]): string {
    return value.slice(0, this.length) + "...";
  }

}
