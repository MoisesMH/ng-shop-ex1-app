import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ShopService } from './shop.service';
import { ProductItemComponent } from './product-item/product-item.component';
import { BrandsListComponent } from './brands-list/brands-list.component';
import { TypesListComponent } from './types-list/types-list.component';
import { FilterbyListComponent } from './shared/filterby-list/filterby-list.component';
import { FilterbyListService } from './shared/filterby-list/filterby-list.service';
import { ProductListComponent } from './product-list/product-list.component';
import { SortbyListComponent } from './sortby-list/sortby-list.component';
import { PaginationModule } from '../pagination/pagination.module';
import { SearchItemComponent } from './shared/search-item/search-item.component';
import { InputFocusDirective } from './shared/search-item/input-focus.directive';
import { InitSortPipe } from './sortby-list/init-sort.pipe';



@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent,
    BrandsListComponent,
    TypesListComponent,
    FilterbyListComponent,
    ProductListComponent,
    SortbyListComponent,
    SearchItemComponent,
    InputFocusDirective,
    InitSortPipe
  ],
  providers: [ShopService, FilterbyListService],
  imports: [
    CommonModule,
    PaginationModule
  ],
  exports: [ShopComponent]
})
export class ShopModule { }
