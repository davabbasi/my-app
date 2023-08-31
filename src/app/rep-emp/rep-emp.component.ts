import { AddEmpComponent } from './../add-emp/add-emp.component';
import { ServicesService } from './../services.service';
import { Component } from '@angular/core';
import { GetEmployeesList } from '../get-employees-list';
import { Data } from '@angular/router';

@Component({
  selector: 'app-rep-emp',
  templateUrl: './rep-emp.component.html',
  styleUrls: ['./rep-emp.component.css']
})

export class RepEmpComponent  {
  Emps: any;
  constructor(private service:ServicesService){}
  InterFace:GetEmployeesList= {
    ID:0,
    Filter : '',
    PageNumber: 0,
    ItemCountPerPage: 5,
  }

  ngOnInit(){
    this.GetAllEmps(this.InterFace)

  }

  readall(_event:Event){
    const filterValue = (_event.target as HTMLInputElement).value;

    this.InterFace.Filter=filterValue;
    this.GetAllEmps(this.InterFace)



  }

  readall2(_event2:Data){
    this.InterFace.ItemCountPerPage=Number(_event2);
    this.GetAllEmps(this.InterFace);

  }
  readall3(_event3:Event){
    const pageNumber= (_event3.target as HTMLInputElement).value;
    this.InterFace.PageNumber=Number(pageNumber)-1;
    this.GetAllEmps(this.InterFace);

  }
  GetAllEmps(data:any){
    this.service.GetAllEmps(data).subscribe(
      rdata=>{
      this.Emps=rdata;
    })   

  }

  DeleteEmp(id:number){
    debugger
    let text='are you sure to delete selected record???????';
    if (confirm(text) == true) {
      this.service.DeleteEmp(id).subscribe({
        next:(res)=>{
          alert("Selected Employee is deleted!!!");
          this.GetAllEmps(this.InterFace);
        },
        error:(err)=>{
          console.log(err);
        }
       
      })
      

    } 

    
  }
  



}
