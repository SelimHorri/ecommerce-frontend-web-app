
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private apiUrl: string = environment.apiUrl;
  
  constructor(private http: HttpClient) {
    this.apiUrl = `${this.apiUrl}/api/users`;
  }
  
  public findById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${userId}`, {
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem(environment.jwtToken)}`
      }
    });
  }
  
  public findByUsername(username: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/username/${username}`, {
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem(environment.jwtToken)}`
      }
    });
  }
  
  
  
}







