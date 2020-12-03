import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css']
})
export class AddComponentComponent implements OnInit {
 
  iemployee: IEmployee;

  constructor(private httpClient: HttpClient) { 
    this.iemployee ={

      EmployeeId: 0,
      EmployeeAddress : "",

      EmployeeMobileNo: null,
      EmployeeEmail : "",
      EmployeeDesignation: "",
      EmployeeDepartment: "",
      EmployeeZipCode: null,
      EmpFullName: "",
      EmployeeDOB: new Date,
      EmployeeGender: "",
      EmployeeAltNumber: null,
      EmployeeBankName: "",
      EmployeeAccountNumber: null,
      EmployeeUniqueId: null,
      EmployeeBankCity: "",
      EmployeeBankIfscCode: "",
      EmployeeBankAddress: "",
      EmployeeJoiningDate: new Date,
      EmployeeCurrentCTC : null,
      EmployeeMonthlysalary: null,
      EmployeeCurrentDesignation: "",
      Message: "",
      Result: true
    }
  }

  ngOnInit(): void {
  }

  postEmployee(form:NgForm){
    if (form.valid) {
      debugger;
      this.httpClient.post<any>('http://storeapi.gerasim.in/api/Employee/AddEmployee', this.iemployee).subscribe((res: any) => {
        debugger;
        if(res.Result) {
          alert(res.Message)
        } else {
          alert('eroor'+res.Message);
        }
      },
        error => {
          console.log("ERROR*****");
        });
    }else{
      alert("Went Wrong");
    }
  }
  
}
export interface IEmployee{

  EmployeeId : number;
  EmployeeAddress : string;
  EmployeeMobileNo: number;
  EmployeeEmail : string;
  EmployeeDesignation: string;
  EmployeeDepartment: string;
  EmployeeZipCode: number;
  EmpFullName: string;
  EmployeeDOB: Date;
  EmployeeGender: string;
  EmployeeAltNumber: number;
  EmployeeBankName: string;
  EmployeeAccountNumber: number;
  EmployeeUniqueId: number;
  EmployeeBankCity: string;
  EmployeeBankIfscCode: string;
  EmployeeBankAddress: string;
  EmployeeJoiningDate: Date;
  EmployeeCurrentCTC : number;
  EmployeeMonthlysalary: number;
  EmployeeCurrentDesignation: string;
  Message: string;
  Result: boolean;
}
