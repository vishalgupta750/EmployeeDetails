import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent }   from './employee/employee.component';
import { EmployeeDetailComponent }      from './employee-detail/employee-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/employee', pathMatch: 'full' },
  { path: 'employee-detail', component: EmployeeDetailComponent },
  { path: 'employee', component: EmployeeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
