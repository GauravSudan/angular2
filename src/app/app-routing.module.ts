import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './Components/comp1/comp1.component';
import { DataTableComponentComponent } from './Components/data-table-component/data-table-component.component';
import { NotFoundComponentComponent } from './Components/not-found-component/not-found-component.component';
import { AuthGuard } from './AuthGuard/auth.guard';

// const routes: Routes = [];
const routes: Routes = [ 
  { path: '', component: Comp1Component }, 
  { path: 'data', component: Comp1Component },
  { path: 'data/:user',canActivate:[AuthGuard], component: DataTableComponentComponent },
  { path: '**', component: NotFoundComponentComponent }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
