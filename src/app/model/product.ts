
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
  
  
  
}






