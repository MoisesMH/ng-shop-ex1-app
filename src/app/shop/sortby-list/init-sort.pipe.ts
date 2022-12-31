import { Pipe, PipeTransform } from '@angular/core';
import { SortOptions } from 'src/app/shared/models/sortOptions.model';

interface initSortOptions {
  init: string;
  sortOptions?: Array<SortOptions>;
}

@Pipe({
  name: 'initSort'
})
export class InitSortPipe implements PipeTransform {

  transform(value: string, args: initSortOptions): string {
    const { init, sortOptions } = args;
    if(!!value) {
      const foundOpt = sortOptions.find(opt => opt.value.toLowerCase() === value.toLowerCase())
      if (!!foundOpt) {
        return foundOpt.name
      } else {
        return init
      }
    } else {
      return init
    }
  }

}
