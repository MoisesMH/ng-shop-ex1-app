import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

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

  constructor() {
    this.searchChange = new EventEmitter<string>();
    this.reset = new EventEmitter<string>();
  }

  onSearch(value: string) {
    this.searchChange.emit(value)
  }

  onReset() {
    this.reset.emit()
  }
}
