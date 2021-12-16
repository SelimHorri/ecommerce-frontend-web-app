
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService) {
    
  }
  
  ngOnInit(): void {
    // this.findById(1);
    this.findByUsername("selimhorri");
  }
  
  public findById(userId: number): void {
    this.userService.findById(userId)
        .subscribe(
          (response: User) => {
            console.log("user: " + response.firstName);
            alert("user: " + response.firstName);
          },
          (error: HttpErrorResponse) => {
            console.log(error.message);
            alert(error.message);
          }
        );
  }
  
  public findByUsername(username: string): void {
    this.userService.findByUsername(username)
      .subscribe(
        (response: User) => {
          console.log("user: " + response.firstName);
          alert("user: " + response.firstName);
        },
        (error: HttpErrorResponse) => {
          console.log(error.message);
          alert(error.message);
        }
      );
  }
  
  
  
}










