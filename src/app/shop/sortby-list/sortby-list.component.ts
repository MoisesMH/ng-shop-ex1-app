import { Component, EventEmitter, Output } from '@angular/core';
import { SortOptions } from 'src/app/shared/models/sortOptions.model';

@Component({
  selector: 'app-sortby-list',
  templateUrl: './sortby-list.component.html',
  styleUrls: ['./sortby-list.component.scss']
})
export class SortbyListComponent {
  @Output() sortMethod: EventEmitter<string>;

  private expanded: boolean;
  
  sortOptions: Array<SortOptions>;
  sort?: SortOptions;

  constructor() {
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
    this.sort = sort
    this.sortMethod.emit(this.sort.value)
  }
}
