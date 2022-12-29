import { Pipe, PipeTransform } from '@angular/core';
import { Pagination } from 'src/app/shared/models/pagination.model';

@Pipe({
  name: 'startCount',
  pure: true
})
export class StartCountPipe implements PipeTransform {

  transform(res: Pagination, ...args: unknown[]): number {
    const { pageIndex, pageSize } = res
    // console.log(((pageIndex - 1) * pageSize + 1));
    return ((pageIndex - 1) * pageSize + 1);
  }

}
