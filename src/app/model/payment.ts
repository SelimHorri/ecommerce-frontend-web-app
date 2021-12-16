
import { Order } from "./order";

export class Payment {
  
  constructor(
    public paymentId: number,
    public isPayed: boolean,
    public paymentStatus: string,
    public order: Order) {
    
  }
  
  
  
}







