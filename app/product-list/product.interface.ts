/**
 * Defines a product hash, used in the 
 * products list in the product-list component
 * 
 * @export IProduct
 * @interface IProduct
 */
export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    description: string;
    price: number;
    starRating: number;
    imageUrl: string;
}