import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { PaginatePipe } from './paginate.pipe';
import { PaginationHeaderComponent } from './pagination-header/pagination-header.component';
import { StartCountPipe } from './pagination-header/start-count.pipe';
import { EndCountPipe } from './pagination-header/end-count.pipe';



@NgModule({
  declarations: [
    PaginationComponent,
    PaginatePipe,
    PaginationHeaderComponent,
    StartCountPipe,
    EndCountPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginationComponent,
    PaginationHeaderComponent,
  ]
})
export class PaginationModule { }
