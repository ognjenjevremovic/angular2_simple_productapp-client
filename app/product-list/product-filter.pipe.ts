//  Dependancies
import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product.interface';

/**
 * Pipe for filtering products
 * 
 * @export ProductFilterPipe
 * @class ProductFilterPipe
 * @implements {PipeTransform}
 */
@Pipe({
    name: 'productNameFilter'
})
export class ProductNameFilterPipe implements PipeTransform {
    transform(products: IProduct[], filterByName: string): IProduct[] {
        filterByName = filterByName ? filterByName.toLocaleLowerCase() : null;
        return filterByName ? products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterByName) !== -1) : products;
    }
}

@Pipe({
    name: 'productRatingFilter'
})
export class ProductRatingFilterPipe implements PipeTransform {
    transform(products: IProduct[], filterByRating: number): IProduct[] {
        filterByRating = filterByRating ? filterByRating : null;
        return filterByRating ? products.filter((product: IProduct) => product.starRating >= filterByRating) : products;
    }
}