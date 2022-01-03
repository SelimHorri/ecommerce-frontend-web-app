
export class ExceptionMsg {
  
  public timestamp!: Date;
  public httpStatus!: string;
  public msg!: string;
  
  constructor(public obj: any) {
    this.timestamp = obj?.timestamp as Date;
    this.httpStatus = obj?.httpStatus as string;
    this.msg = obj?.msg as string;
  }
  
  
  
}






