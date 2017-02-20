import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';

import { ProductListComponent } from './product-list.component';
import { ProductDetailsComponent } from './product-details.component';
import { ProductDetailsGuard } from './product-details-guard.service';
import { ProductNameFilterPipe, ProductRatingFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';

@NgModule({
    imports: [
        SharedModule,
        ProductRoutingModule
    ],
    declarations: [
        ProductListComponent,
        ProductDetailsComponent,
        ProductNameFilterPipe,
        ProductRatingFilterPipe
    ],
    providers: [
        ProductService,
        ProductDetailsGuard
     ]
})
export class ProductModule { }
