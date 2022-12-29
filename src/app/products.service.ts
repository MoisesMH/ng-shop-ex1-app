import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "./shared/models/product.model";

@Injectable()
export class ProductsService {
    private url: string;

    constructor(private readonly http: HttpClient) {
        this.url = 'https://localhost:5001/api/'
    }

    getProducts() {
        return this.http.get<Array<Product> | Product>(this.url + 'products')
    }

    getProductsByParams(params: any) {
        return this.http.get<Array<Product> | Product>(
            this.url + 'products',
            params
        )
    }
}