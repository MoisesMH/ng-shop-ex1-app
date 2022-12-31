import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Pagination } from '../shared/models/pagination.model';
import { ProductBrand } from '../shared/models/productBrand.model';
import { ProductType } from '../shared/models/productType.model';
import { BehaviorSubject, map, tap } from 'rxjs';
import { ShopParams } from '../shared/models/shopParams.model';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ShopService {
    private baseUrl: string;
    // private pagination: BehaviorSubject<Pagination>;

    constructor(private readonly http: HttpClient) {
        this.baseUrl = 'https://localhost:7011/api/'
        // this.pagination = new BehaviorSubject<Pagination>(
        //     {
        //         pageIndex: 1,
        //         pageSize: 0,
        //         count: 0,
        //         data: null
        //     }
        // );
    }

    // getPagination() {
    //     return this.pagination.asObservable();
    // }

    getProducts(shopParams: ShopParams) {
        let params: HttpParams = new HttpParams()

        const { brandId, typeId, sort, pageNumber, pageSize, search } = shopParams
        if(brandId) params = params.append('brandId', brandId.toString())
        if(typeId) params = params.append('typeId', typeId.toString())
        if(search) params = params.append('search', search)

        params = params.append('sort', sort)
        params = params.append('pageIndex', pageNumber.toString())
        params = params.append('pageSize', pageSize.toString())

        return this.http.get<Pagination>(
            this.baseUrl + 'products',
            { params }
        )
        // .pipe(tap(body => {
        //     this.pagination.next({
        //         pageIndex: body.pageIndex,
        //         pageSize: body.pageSize,
        //         count: body.count
        //     } as Pagination)
        // }))
    }

    getProductsByPagination(params: Partial<Pagination>) {
        return this.http.get<Pagination>(
            this.baseUrl + 'products',
            { params } as Object
        )
    }
    
    getBrands() {
        return this.http.get<Array<ProductBrand>>(
            this.baseUrl + 'products/brands'
        ).pipe(
            map(brands => {
                const of0: ProductBrand = { id: 0, name: "All" }
                return [of0, ...brands]
            }))
    }

    getTypes() {
        return this.http.get<Array<ProductType>>(
            this.baseUrl + 'products/types'
        ).pipe(
            map(types => {
                const of0: ProductType = { id: 0, name: "All" }
                return [of0, ...types]
            }))
    }
}
