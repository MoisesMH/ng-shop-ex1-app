import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { map, Observable, Subject, Subscription, tap } from 'rxjs';
import { ProductBrand } from 'src/app/shared/models/productBrand.model';
import { FilterbyListService } from '../shared/filterby-list/filterby-list.service';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-brands-list',
  templateUrl: './brands-list.component.html',
  styleUrls: ['./brands-list.component.scss']
})
export class BrandsListComponent implements OnInit {
  brands$: Observable<Array<ProductBrand>>;
  // brands: Array<ProductBrand>;
  // subscription: Subscription;
  @Output() setBrandId: EventEmitter<number>;

  constructor(
    private readonly _shopService: ShopService,
    private readonly _filterbyIdService: FilterbyListService
  ) {
    // this.brands$ = this._shopService.getBrands()
    this.setBrandId = new EventEmitter<number>();
  }

  onBrandIdSelected(brandId: number) {
    // console.log("Emitted brand: ", brandId);
    this._filterbyIdService.setBrandId(brandId)
    this.setBrandId.emit(brandId)
  }

  ngOnInit() {
    // this.subscription = this.brands$.subscribe(
    //   brands => this.brands = brands
    // )
    this.brands$ = this._shopService.getBrands()
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe()
  }
}
