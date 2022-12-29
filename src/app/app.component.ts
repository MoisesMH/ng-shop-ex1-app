import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, Observable, Subscription } from 'rxjs';
import { Product } from './shared/models/product.model';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  subscription: Subscription

  title = 'Skinet';

  left = [
    {
      name: "Logo",
      to: "/"
    }
  ];

  mid = [
    {
      name: "Nosotros",
      to: "/nosotros"
    },
    {
      name: "Busqueda",
      to: "/search"
    },
    {
      name: "Contactenos",
      to: "/contactenos"
    }
  ];
  
  right = [
    {
      name: "Iniciar Sesion",
      to: "/login"
    },
    {
      name: "Registrarse",
      to: "/register"
    }
  ]

  products$: Observable<Array<Product> | Product>

  arr = [1,3,4,5,6];

  obs1 = from(this.arr);

  constructor(private readonly _productsService: ProductsService) {
    this.products$ = this._productsService.getProducts()
  }

  ngOnInit(): void {
    this.subscription = this.obs1.subscribe({
      next(value) {
        console.log(value);
      },
      error(err) {
        console.log(err);
      },
      complete() {
        console.log("Completed callback.");
      },
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
