import { Pipe, PipeTransform } from '@angular/core';
import { Pagination } from '../shared/models/pagination.model';

@Pipe({
  name: 'paginate',
  pure: true
})
export class PaginatePipe implements PipeTransform {

  transform(res: Pagination, ...args: unknown[]): number[] {
    const { count, pageSize, pageIndex } = res
    
    const start = (pageIndex - 1) * pageSize
    const end = start + pageSize
    const pages: number = Math.ceil(count / pageSize * 1.0)
    return this.range(1, pages)
  }

  range(start: number, size: number) {
    const pages: Array<number> = []
    for (let i = start, end = start + size; i < end; ++i) {
      pages.push(i)
    }
    return pages
  }
}
