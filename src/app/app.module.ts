import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './Components/comp1/comp1.component';
import { FormsModule } from '@angular/forms';
import { DataTableComponentComponent } from './Components/data-table-component/data-table-component.component';
import { NotFoundComponentComponent } from './Components/not-found-component/not-found-component.component';
import { AuthGuard } from './AuthGuard/auth.guard';
import { EmpDataService } from './Services/emp-data.service';
import { HttpClientModule } from '@angular/common/http';
import { StudentDataService } from './Services/student-data.service';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    DataTableComponentComponent,
    NotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule      
  ],
  providers: [
    AuthGuard,
    EmpDataService,
    StudentDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
