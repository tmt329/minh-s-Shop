import { Product } from "./product.class";

export class ProductInBag {
    product:Product ;
    size:number =41;
    quantity: number = 1;
    constructor(_product: Product)
    {
        this.product=_product
    }
}
