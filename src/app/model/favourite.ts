
import { Product } from "./product";
import { User } from "./user";

export class Favourite {
  
  constructor(
    public userId: number,
    public productId: number,
    public likeDate: Date,
    public user: User,
    public product: Product) {
    
  }
  
  
  
}







