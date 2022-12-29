import { HttpEvent } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { Pagination } from '../shared/models/pagination.model';
import { Product } from '../shared/models/product.model';
import { ProductBrand } from '../shared/models/productBrand.model';
import { ProductType } from '../shared/models/productType.model';
import { ShopParams } from '../shared/models/shopParams.model';
import { FilterbyListService } from './shared/filterby-list/filterby-list.service';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit, OnDestroy{
  products$: Observable<Array<Product> | Product>;
  res$: Observable<Pagination>;
  // brandId: number;
  // typeId: number;
  // sortMethod: string;
  shopParams: ShopParams;
  totalCount: number;
  subscription: Subscription;

  constructor(
    private readonly _shopService: ShopService,
    private readonly _filterbyIdService: FilterbyListService
  ) {
    // this.brandId = 0
    // this.typeId = 0
    // this.products$ = this._shopService.getProducts(this.brandId, this.typeId, this.sortMethod)
    this.shopParams = new ShopParams();
  }

  updateProducts() {
    this.products$ = this._shopService.getProducts(this.shopParams).pipe(
      map(body => body.data)
    )
    this.res$ = this._shopService.getPagination();
    this.subscription = this._shopService.getProducts(this.shopParams).subscribe(
      body => {
        this.shopParams.pageSize = body.pageSize;
        this.totalCount = body.count;
      }
    )
  }

  onBrandIdSelected(brandId: number) {
    this.shopParams.brandId = brandId
    this.shopParams.pageNumber = 1
    this.updateProducts()
  }

  onTypeIdSelected(typeId: number) {
    this.shopParams.typeId = typeId
    this.shopParams.pageNumber = 1
    this.updateProducts()
  }

  onSortMethodSelected(sortMethod: string) {
    this.shopParams.sort = sortMethod
    this.updateProducts()
  }

  onPageSelected(currentPage: number) {
    this.shopParams.pageNumber = currentPage
    this.updateProducts()
  }

  onSearchSelected(value: string) {
    this.shopParams.search = value
    this.shopParams.pageNumber = 1
    this.updateProducts()
  }

  onResetSelected() {
    this.shopParams = new ShopParams()
    this.updateProducts()
  }

  ngOnInit(): void {
    this.products$ = this._shopService.getProducts(this.shopParams).pipe(
      map(body => body.data)
    )
    this.res$ = this._shopService.getPagination();
    this.subscription = this._shopService.getProducts(this.shopParams).subscribe(
      body => {
        this.shopParams.pageNumber = body.pageIndex;
        this.shopParams.pageSize = body.pageSize;
        this.totalCount = body.count;
      }
    )
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
