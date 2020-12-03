import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { AddComponentComponent } from './employee/add-component/add-component.component';
import { EmployeeComponent } from './employee/employee.component';
import { GetAdvanceComponent } from './employee/get-advance/get-advance.component';
import { IncreDecreComponent } from './incre-decre/incre-decre.component';

const routes: Routes = [
  {
    path:'calculator',
    component: CalculatorComponent
  },
  {
    path:'IncreDecre',
    component: IncreDecreComponent
  },
  {
    path:'employee',
    component: EmployeeComponent
  },
  {
    path:'addEmployeeForm',
    component: AddComponentComponent
  },
  {
    path:'getAdv',
    component: GetAdvanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
