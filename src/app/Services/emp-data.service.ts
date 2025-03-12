import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from '../Interface/Employee';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpDataService {


  url: string = "/assets/Data/emp.json"
  constructor(private http: HttpClient) { }

  getEmp(){
    return [
        {"id":1, "Name": "Gaurav"},
        {"id":2, "Name": "Rahul"},
        {"id":3, "Name": "Arthur"}
    ]

    

  }

//using observable
  //return this.http.get<IEmployee[]>(this.url);

  //using observable & Error handling
  // getEmp(): Observable<IEmployee[]>{
  //   return this.http.get<IEmployee[]>(this.url).pipe(
  //     retry(1),
  //     catchError(this.handleError)
  //   );
  // }

  // using promise
// getEmp(): Promise<IEmployee[]>{
//   return new Promise((resolve, reject) => {
//     this.http.get(this.url)
//       .subscribe({
//         next: (result) => {
//           resolve(result as IEmployee[]);
//         },
//         error: (error: HttpErrorResponse) => {
//           console.log('Error occured');
//           reject('Error');
//         }
//       });
//   });
//   }
  
  


  handleError(error: any) {
    return throwError(error.message);
  }
 
}
