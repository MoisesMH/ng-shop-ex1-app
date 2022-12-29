import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Pagination } from 'src/app/shared/models/pagination.model';

@Component({
  selector: 'app-pagination-header',
  templateUrl: './pagination-header.component.html',
  styleUrls: ['./pagination-header.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationHeaderComponent implements OnInit {
  @Input() res: Pagination;
  // totalCount: number;

  ngOnInit(): void {
    // this.totalCount = this.res.count;
    // console.log(this.res.count);
    
    // console.log(this.totalCount);
    // console.log(this.res);
  }

}
