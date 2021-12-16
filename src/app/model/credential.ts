
import { User } from "./user";

export class Credential {
  
  constructor(
    public credentialId: number,
    public username: string,
    public password: string,
    public role: string,
    public isEnabled: boolean,
    public isAccountNonExpired: boolean,
    public isAccountNonLocked: boolean,
    public isCredentialsNonExpired: boolean,
    public user: User) {
    
  }
  
  
  
}





