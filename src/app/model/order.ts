
import { Cart } from "./cart";

export class Order {
  
  constructor(
    public orderId: number,
    public orderDate: Date,
    public orderDesc: string,
    public orderFee: number,
    public cart: Cart) {
    
  }
  
  
  
}






