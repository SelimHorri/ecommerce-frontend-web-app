
import { Order } from "./order";
import { Product } from "./product";

export class Shipping {
  
  constructor(
    public productId: number,
    public orderId: number,
    public orderedQuantity: number,
    public product: Product,
    public order: Order) {
    
  }
  
  
  
}






