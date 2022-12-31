import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterbyListService } from '../filterby-list/filterby-list.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {
  @Input() name: string;
  @Input() placeholder: string;
  @Input() search: string;

  @Output() searchChange: EventEmitter<string>;
  @Output() reset: EventEmitter<string>;

  search$: Observable<string>;

  constructor(private readonly _filterbyListService: FilterbyListService) {
    this.searchChange = new EventEmitter<string>();
    this.reset = new EventEmitter<string>();
  }

  onSearch(value: string) {
    this._filterbyListService.setSearch(value)
    this.searchChange.emit(value)
  }

  onReset() {
    this._filterbyListService.reset()
    this.reset.emit()
  }
}
