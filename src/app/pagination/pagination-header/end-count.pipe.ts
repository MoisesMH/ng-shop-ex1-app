import { Pipe, PipeTransform } from '@angular/core';
import { Pagination } from 'src/app/shared/models/pagination.model';

@Pipe({
  name: 'endCount',
  pure: true
})
export class EndCountPipe implements PipeTransform {

  transform(res: Pagination, ...args: unknown[]): number {
    const { pageIndex, pageSize, count } = res
    if (pageIndex * pageSize > count) {
      // console.log(count);
      return count
    } else {
      // console.log(pageIndex * pageSize);
      return pageIndex * pageSize
    }
  }

}
