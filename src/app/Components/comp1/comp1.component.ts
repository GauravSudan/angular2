import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component {
  msg: string = "Welcome";
  myModel="";
 public user: string = ""
 showLoginbtn: boolean = false;

 constructor(private router:Router){

 }
  submit( ){

    if(this.user == "aman")
      {
        localStorage.setItem('login','1');
        this.router.navigate(['/data',this.user]);
      }
      else{
        alert('Wrong Username/Password')
        localStorage.setItem('login','2');
      }
    
  }
  onKeyPress(event: KeyboardEvent){
    console.log(this.user);
    this.showLoginbtn = true;
  }

}
