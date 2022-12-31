import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagination } from '../shared/models/pagination.model';
import { FilterbyListService } from '../shop/shared/filterby-list/filterby-list.service';
import { ShopService } from '../shop/shop.service';

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

  res$: Observable<Pagination>
  // pages: Array<number>;
  

  constructor(
    private readonly _filterbyListService: FilterbyListService,
    private readonly _shopService: ShopService  
  ) {
    this.changePage = new EventEmitter<number>();
    // const pagesCount: number = Math.ceil(this.totalItems / this.pageSize)
    // this.pages = this.range(this.currentPage, pagesCount)
    // this.res$ = this._filterbyListService.getPagination()
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
    this._filterbyListService.setPage(this.currentPage)
    this.changePage.emit(page)
  }

  ngOnInit() {
    // console.log(this.totalItems);
    // console.log(this.pageSize);
    
    // const pagesCount: number = Math.ceil(this.totalItems / this.pageSize)
    // console.log(pagesCount);
    // this.res$ = this._filterbyListService.getPagination()
    // this.pages = this.range(this.currentPage, pagesCount)
    // this.onPageChanged(1)
    // this.currentPage = this.res.pageIndex
  }
}
