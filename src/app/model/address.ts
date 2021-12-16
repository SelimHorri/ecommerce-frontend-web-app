
import { User } from "./user";

export class Address {
  
  constructor(
    public addressId: number,
    public fullAddress: string,
    public postalCode: string,
    public city: string,
    public user: User) {
    
  }
  
  
  
}






