import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initSort'
})
export class InitSortPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
