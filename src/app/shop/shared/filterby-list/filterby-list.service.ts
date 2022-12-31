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

    constructor() {
        this.shopParams = new ShopParams();
        this.shopParams$ = new BehaviorSubject<ShopParams>(this.shopParams);
    }

    getShopParams() {
        return this.shopParams$.asObservable()
    }

    getBrandId() {
        return this.shopParams$.asObservable().pipe(
            map(data => data.brandId)
        )
    }

    setBrandId(id: number) {
        if (this.shopParams.brandId !== id) {
            this.shopParams.brandId = id
            this.shopParams.pageNumber = 1
            this.shopParams$.next(this.shopParams)            
        }
    }

    getTypeId() {
        return this.shopParams$.asObservable().pipe(
            map(data => data.typeId)
        )
    }

    setTypeId(id: number) {
        if (this.shopParams.typeId !== id) {
            this.shopParams.typeId = id
            this.shopParams.pageNumber = 1
            this.shopParams$.next(this.shopParams)            
        }
    }
    
    getSort() {
        return this.shopParams$.asObservable().pipe(
            map(data => data.sort)
        )
    }

    setSort(value: string) {
        if (this.shopParams.sort !== value) {
            this.shopParams.sort = value
            this.shopParams$.next(this.shopParams)            
        }
    }

    // getPage() {
    //     return this.shopParams$.asObservable().pipe(
    //         map(data => data.sort)
    //     )
    // }

    setPage(currentPage: number) {
        // Initially, the if condition was for this method
        // so keep the if here and delete the if conditions for the other methods if necessary
        if(this.shopParams.pageNumber !== currentPage) {
            this.shopParams.pageNumber = currentPage
            this.shopParams$.next(this.shopParams)
        }
    }

    getSearch() {
        return this.shopParams$.asObservable().pipe(
            map(data => data.search)
        )
    }

    setSearch(value: string) {
        if (this.shopParams.search !== value) {
            this.shopParams.search = value
            this.shopParams.pageNumber = 1
            this.shopParams$.next(this.shopParams)            
        }
    }

    reset() {
        this.shopParams = new ShopParams();
        this.shopParams$.next(this.shopParams)
    }
}