import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { DataService } from './data.service';
import { PagerService} from './pager.service';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeDetailComponent,
    FilterPipe,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [DataService,PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
