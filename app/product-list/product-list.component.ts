//  Dependancies
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.interface';
import { ProductService } from './product.service';

//  Decorator
@Component({
  moduleId: module.id,
  templateUrl: 'product-list.component.html',
  styleUrls: [
    'product-list.component.css'
  ]
})
//  Component Class
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product list';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  filterProductName: string;
  filterProductRating: number;
  products: IProduct[];
  errorMessage: string;

  constructor(private _productService: ProductService) { }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  ratingRecieved(rating: number): void {
    this.filterProductRating = rating;
  }
  ngOnInit(): void {
    this._productService.getProducts()
        .subscribe(
          products => this.products = products,
          error => this.errorMessage = error as any
        );
  }
}
