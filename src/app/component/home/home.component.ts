
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { ExceptionMsg } from 'src/app/model/exception-msg';
import { CategoryDtoCollectionResponse } from 'src/app/model/response/collection/category-dto-collection-response';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public categories!: Category[];
  
  constructor(private categoryService: CategoryService) {
    
  }
  
  ngOnInit(): void {
    this.findAll();
  }
  
  public findAll(): void {
    this.categoryService.findAll()
        .subscribe(
          (response: CategoryDtoCollectionResponse) => {
            this.categories = response!.collection;
            this.categories.forEach(c => console.log(JSON.stringify(c)));
          },
          (errorResponse: HttpErrorResponse) => {
            let exceptionMsg = new ExceptionMsg(errorResponse?.error);
            console.log(exceptionMsg.msg);
            alert(exceptionMsg.msg);
          }
        );
  }
  
  
  
}










