import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    templateUrl: 'product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {
    title: string;
    product: IProduct;
    errorMessage: string;
    rating: number = 3.5;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _productService: ProductService) {
                }

    ngOnInit(): void {
        let id: number = +this._route.snapshot.params['id'];
        this.getProductById(id);
    }

    getProductById(id: number): void {
        this._productService.getProductById(id)
            .subscribe(product => this.product = product);
    }
    backToProducts(): void {
        this._router.navigate(['/products']);
    }
}