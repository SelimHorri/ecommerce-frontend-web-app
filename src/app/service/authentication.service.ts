
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationRequest } from '../model/request/authentication-request';
import { AuthenticationResponse } from '../model/response/authentication-response';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  private apiUrl: string = environment.apiUrl;
  
  constructor(private http: HttpClient) {
    this.apiUrl = `${this.apiUrl}/api/authenticate`;
  }
  
  public authenticate(authenticationRequest: AuthenticationRequest): Observable<AuthenticationResponse> {
    authenticationRequest.username = authenticationRequest.username.trim().toLowerCase();
    return this.http.post<AuthenticationResponse>(this.apiUrl, authenticationRequest);
  }
  
  public isLoggedIn(): boolean {
    return !(sessionStorage.getItem("username") === null);
  }
  
  public logout(): boolean {
    
    if (this.isLoggedIn()) {
      sessionStorage.clear();
      return true;
    }
    
    return false;
  }
  
  
  
}








