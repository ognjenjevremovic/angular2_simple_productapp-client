import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailsComponent } from './product-details.component';
import { ProductDetailsGuard } from './product-details-guard.service';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            { path: 'product/:id', component: ProductDetailsComponent,
                canActivate: [ ProductDetailsGuard ] }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ProductRoutingModule { }
