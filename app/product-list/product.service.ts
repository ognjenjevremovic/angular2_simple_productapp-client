import { Injectable } from '@angular/core';
import { IProduct } from './product.interface';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {
    private _productUrl = 'api/products/products.json';
    private _products: IProduct[];

    constructor(private _http: Http) { }

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => response.json() as IProduct[])
            .do(data => this._products = data)
            .catch(this.handleError);
    }
    getProductById(id: number): Observable<IProduct> {
        return this.getProducts().map(
            (products: IProduct[]) => products.find(product => product.productId === id));
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server erro');
    }
}