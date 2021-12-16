
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';
import { ProductDtoCollectionResponse } from '../model/response/collection/product-dto-collection-response';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private apiUrl: string = environment.apiUrl;
  
  constructor(private http: HttpClient) {
    this.apiUrl = `${this.apiUrl}/api/products`;
  }
  
  public findAll(): Observable<ProductDtoCollectionResponse> {
    return this.http.get<ProductDtoCollectionResponse>(`${this.apiUrl}`);
  }
  
  public findById(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${productId}`);
  }
  
  
  
}









