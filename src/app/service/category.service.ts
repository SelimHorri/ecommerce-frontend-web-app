
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../model/category';
import { CategoryDtoCollectionResponse } from '../model/response/collection/category-dto-collection-response';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  private apiUrl: string = environment.apiUrl;
  
  constructor(private http: HttpClient) {
    this.apiUrl = `${this.apiUrl}/api/categories`;
  }
  
  public findAll(): Observable<CategoryDtoCollectionResponse> {
    return this.http.get<CategoryDtoCollectionResponse>(`${this.apiUrl}`);
  }
  
  public findById(categoryId: number): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/${categoryId}`);
  }
  
  
  
}









