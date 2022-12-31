import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProductType } from 'src/app/shared/models/productType.model';
import { FilterbyListService } from '../shared/filterby-list/filterby-list.service';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-types-list',
  templateUrl: './types-list.component.html',
  styleUrls: ['./types-list.component.scss']
})
export class TypesListComponent implements OnInit {
  types$: Observable<Array<ProductType>>;
  // types: Array<ProductType>;
  // subscription: Subscription;
  selectedTypeId$: Observable<number>;
  @Output() setTypeId: EventEmitter<number>;

  constructor(
    private readonly _shopService: ShopService,
    private readonly _filterbyIdService: FilterbyListService
  ) {
    // this.types$ = this._shopService.getTypes()
    this.setTypeId = new EventEmitter<number>();
    this.selectedTypeId$ = this._filterbyIdService.getTypeId();
  }

  onTypeIdSelected(typeId: number) {
    // console.log("Emitted type: ", typeId);
    this._filterbyIdService.setTypeId(typeId)
    this.setTypeId.emit(typeId)
  }

  ngOnInit() {
    this.types$ = this._shopService.getTypes()
    // this.selectedTypeId$ = this._filterbyIdService.getTypeId();
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe()
  }
}
