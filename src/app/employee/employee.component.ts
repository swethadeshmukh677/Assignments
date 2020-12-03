import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IEmployee } from './add-component/add-component.component';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  empList1 : any;
  isSidePanel: boolean;
  iemployee : IEmployee;

  constructor(private httpClient : HttpClient, private router: Router) { 
    this.isSidePanel = false;
    debugger;
    this.empList1 =[];
  }

  ngOnInit(): void {
    debugger;    
    this.getEmployeeDetails();
  }

  getEmployeeDetails()
  {
    //debugger;
    this.httpClient.get<any>('http://storeapi.gerasim.in/api/Employee/GetAllEmployee').subscribe((response : any)=>{
       debugger;
       this.empList1 = response;
       this.empList1.forEach(element => {
         element['isEdit']=false;
       });

     }, 
     error=>{
      // console.log("Error in Get");
     });
  }



  addEmployee()
  {
    this.router.navigateByUrl('/addEmployeeForm');
  }

  /* showSidePanel() {
    this.isSidePanel= true;
  }
  closeSidePanle() {
    this.isSidePanel= false;
  } */
}

