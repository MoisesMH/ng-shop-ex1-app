import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pagination } from '../shared/models/pagination.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnInit {
  @Input() currentPage: number;
  @Input() pageSize: number;
  @Input() totalItems: number;
  @Input() res: Pagination;
  @Output() changePage: EventEmitter<number>;

  // pages: Array<number>;
  

  constructor() {
    this.changePage = new EventEmitter<number>();
    // const pagesCount: number = Math.ceil(this.totalItems / this.pageSize)
    // this.pages = this.range(this.currentPage, pagesCount)
  }

  // range(start: number, size: number) {
  //   const pages: Array<number> = []
  //   for (let i = start, end = start + size; i < end; ++i) {
  //     pages.push(i)
  //   }
  //   return pages
  // }

  onPageChanged(page: number) {
    this.currentPage = page
    this.changePage.emit(page)
  }

  ngOnInit() {
    // console.log(this.totalItems);
    // console.log(this.pageSize);
    
    // const pagesCount: number = Math.ceil(this.totalItems / this.pageSize)
    // console.log(pagesCount);
    
    // this.pages = this.range(this.currentPage, pagesCount)
    this.onPageChanged(1)
    // this.currentPage = this.res.pageIndex
  }
}
