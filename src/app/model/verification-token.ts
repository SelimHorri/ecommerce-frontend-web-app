
export class VerificationToken {
  
  constructor(
    public verificationTokenId: number,
    public token: string,
    public expiredDate: Date,
    public credential: Credential) {
    
  }
  
  
  
}






