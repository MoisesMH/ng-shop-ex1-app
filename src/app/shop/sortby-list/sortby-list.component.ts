import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { SortOptions } from 'src/app/shared/models/sortOptions.model';
import { FilterbyListService } from '../shared/filterby-list/filterby-list.service';

@Component({
  selector: 'app-sortby-list',
  templateUrl: './sortby-list.component.html',
  styleUrls: ['./sortby-list.component.scss']
})
export class SortbyListComponent implements OnInit {
  @Input() sort?: string;
  @Output() sortMethod: EventEmitter<string>;
  sort$: Observable<string>;

  private expanded: boolean;
  
  sortOptions: Array<SortOptions>;
  sortSelected?: SortOptions;

  constructor(private readonly _filterbyListService: FilterbyListService) {
    this.expanded = false;
    this.sortOptions = [
      { name: 'Alphabetical', value: 'name' },
      { name: 'Price: Low to High', value: 'priceAsc' },
      { name: 'Price: High to Low', value: 'priceDesc' }
    ]
    this.sortMethod = new EventEmitter<string>();
  }

  isExpanded() {
    return this.expanded;
  }

  expand() {
    this.expanded = !this.expanded;
  }

  close() {
    this.expanded = false
  }

  onSortSelected(sort: SortOptions) {
    this.sortSelected = sort
    this._filterbyListService.setSort(this.sortSelected.value)
    this.sortMethod.emit(this.sortSelected.value)
  }

  ngOnInit(): void {
    this.sort$ = this._filterbyListService.getSort()
  }
}
