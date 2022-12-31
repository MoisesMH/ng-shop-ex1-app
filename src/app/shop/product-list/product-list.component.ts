import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/shared/models/product.model';
import { ShopParams } from 'src/app/shared/models/shopParams.model';
import { FilterbyListService } from '../shared/filterby-list/filterby-list.service';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy{
  @Input() products: Array<Product> | Product;
  products$: Observable<Array<Product> | Product>;
  @Input() shopParams: ShopParams;
  subscription: Subscription;

  constructor(
    private readonly _filterbyListService: FilterbyListService,
    private readonly _shopService: ShopService
  ) {
    // this.products$ = this._filterbyListService.getProducts();
  }

  ngOnInit(): void {
    // this.products$ = this._filterbyListService.getProducts();
    // this.subscription = this._filterbyListService.getShopParams().subscribe(
    //   shopParams => this.shopParams = shopParams
    // )
    // this.products$ = this._shopService.getProducts(this.shopParams).pipe(
    //   map(body => body.data)
    // )
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe()
  }
  
}
