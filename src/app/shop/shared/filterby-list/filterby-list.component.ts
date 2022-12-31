import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterbyListService } from './filterby-list.service';

@Component({
  selector: 'app-filterby-list',
  templateUrl: './filterby-list.component.html',
  styleUrls: ['./filterby-list.component.scss']
})
export class FilterbyListComponent<T> {
  @Input() items: Array<T>;
  @Input() selectedItemId: number;

  @Output() setItemId: EventEmitter<number>;

  constructor() {
    this.selectedItemId = 0;
    this.setItemId = new EventEmitter<number>();
  }

  onItemIdSelected(itemId: number) {
    this.selectedItemId = itemId
    this.setItemId.emit(itemId)
  }
}
