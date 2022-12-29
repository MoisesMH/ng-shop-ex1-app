import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable, tap } from "rxjs";
import { Pagination } from "src/app/shared/models/pagination.model";
import { Product } from "src/app/shared/models/product.model";
import { ShopParams } from "src/app/shared/models/shopParams.model";
import { ShopService } from "../../shop.service";

@Injectable({
    providedIn: 'root'
})
export class FilterbyListService {
    private shopParams: ShopParams;
    private shopParams$: BehaviorSubject<ShopParams>;
    private products$: Observable<Product | Array<Product>>;
    private pagination$: BehaviorSubject<Pagination>;

    constructor(private readonly _shopService: ShopService) {
        this.shopParams = new ShopParams();
        this.shopParams$ = new BehaviorSubject<ShopParams>(this.shopParams);
        this.pagination$ = new BehaviorSubject<Pagination>({
            pageIndex: this.shopParams.pageNumber,
            pageSize: this.shopParams.pageSize,
            count: 0
        } as Pagination);
        this.updateProducts();
    }

    updateProducts() {
        this.products$ = this._shopService.getProducts(this.shopParams).pipe(
            tap(body =>
                this.pagination$.next({
                    pageIndex: body.pageIndex,
                    pageSize: body.pageSize,
                    count: body.count
                } as Pagination)
            ),
            map(body => body.data)
        )
    }

    getProducts() {
        return this.products$;
    }

    getPagination() {
        // return this._shopService.getPagination();
        return this.pagination$.asObservable();
    }

    getBrandId() {
        return this.shopParams$.asObservable().pipe(
            map(data => data.brandId)
        )
    }

    setBrandId(id: number) {
        this.shopParams.brandId = id
        this.shopParams.pageNumber = 1
        this.shopParams$.next(this.shopParams)
    }

    getTypeId() {
        return this.shopParams$.asObservable().pipe(
            map(data => data.typeId)
        )
    }

    setTypeId(id: number) {
        this.shopParams.typeId = id
        this.shopParams.pageNumber = 1
        this.shopParams$.next(this.shopParams)
    }
    
    getSort() {
        return this.shopParams$.asObservable().pipe(
            map(data => data.sort)
        )
    }

    setSort(value: string) {
        this.shopParams.sort = value
        this.shopParams$.next(this.shopParams)
    }

    getPage() {
        return this.shopParams$.asObservable().pipe(
            map(data => data.sort)
        )
    }

    setPage(currentPage: number) {
        this.shopParams.pageNumber = currentPage
        this.shopParams$.next(this.shopParams)
    }

    getSearch() {
        return this.shopParams$.asObservable().pipe(
            map(data => data.search)
        )
    }

    setSearch(value: string) {
        this.shopParams.search = value
        this.shopParams.pageNumber = 1
        this.shopParams$.next(this.shopParams)
    }

    reset() {
        this.shopParams = new ShopParams();
        this.shopParams$.next(this.shopParams)
    }
}