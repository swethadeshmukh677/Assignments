import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { IncreDecreComponent } from './incre-decre/incre-decre.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddComponentComponent } from './employee/add-component/add-component.component';

import { HttpClientModule } from '@angular/common/http';
import { GetAdvanceComponent } from './employee/get-advance/get-advance.component';



@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    IncreDecreComponent,
    EmployeeComponent,
    AddComponentComponent,
    GetAdvanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
