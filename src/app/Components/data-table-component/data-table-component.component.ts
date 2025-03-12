import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpDataService } from 'src/app/Services/emp-data.service';
import { StudentDataService } from 'src/app/Services/student-data.service';

@Component({
  selector: 'app-data-table-component',
  templateUrl: './data-table-component.component.html',
  styleUrls: ['./data-table-component.component.scss']
})
export class DataTableComponentComponent {

  username: any;
  errorMsg: string ="";
  public empData: any = [];
  constructor(private route: ActivatedRoute,
    private _std: StudentDataService
    //private _empservice: EmpDataService
  ){

  }

    ngOnInit(){
    this.username = this.route.snapshot.paramMap.get('user');
    //this.empData = this._std.getStudent();

    //using observable
    //  this._std.getStudent()
    // .subscribe(data => this.empData = data,
    //   error => this.errorMsg = error.message
    // );

    //using observable & Error handling
    // await this._empservice.getEmp()
    // .subscribe(data => this.empData = data,
    //     error => this.errorMsg = error
    // );
    
    //using promise
     this._std.getStudent()
    .then((data) => {
      this.empData = data
    }, (error) => {
      this.errorMsg  = error.message;
    });

    // data processing here



  }

}
