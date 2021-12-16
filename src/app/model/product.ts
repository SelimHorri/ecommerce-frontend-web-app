
import { Category } from "./category";

export class Product {
  
  constructor(
    public productId: number,
    public productTitle: string,
    public imageUrl: string,
    public sku: string,
    public priceUnit: number,
    public quantity: number,
    public category: Category) {
    
  }
  
  public toString(): string {
    return `Product: { productId: ${this.productId}, productTitle: ${this.productTitle}, imageUrl: ${this.imageUrl}, sku: ${this.sku}, priceUnit: ${this.priceUnit}, quantity: ${this.quantity}, categoryId: ${this.category!.categoryId} }`;
  }
  
  
  
}






