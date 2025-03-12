import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from '../Interface/Employee';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  url: string = "/assets/Data/emp.json";
  constructor(private http: HttpClient) { }


  public getStudent(){
    //return this.http.get<IEmployee[]>(this.url);
    
      return new Promise((resolve, reject) => {
    this.http.get(this.url)
      .subscribe({
        next: (result) => {
          resolve(result as IEmployee[]);
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message);
          reject('Error');
        }
      });
  });
  }
}
