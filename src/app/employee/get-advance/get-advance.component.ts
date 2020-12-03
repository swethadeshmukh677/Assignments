import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-advance',
  templateUrl: './get-advance.component.html',
  styleUrls: ['./get-advance.component.css']
})
export class GetAdvanceComponent implements OnInit {

  advanceList : any;
  constructor(private http: HttpClient) {
    this.advanceList=[];
   }

  ngOnInit(): void {
    this.getAdvance();
  }

  getAdvance()
  {
    debugger;
    this.http.get<any>('http://storeapi.gerasim.in/api/Employee/GetAllAdvance').subscribe((response : any)=>{
       debugger;
       this.advanceList = response;
       this.advanceList.forEach(element => {
         element['isEdit'] = false;
       });
       debugger;
      //  for (let index = 0; index < this.advanceList.length; index++) {
      //    const element = array[index];
         
      //  }
     }, 
     error=>{
      // console.log("Error in Get");
     });
  }
}
