import { GetEmployeesList } from './../get-employees-list';
import { HttpClient } from '@angular/common/http';
import { Component,Input, OnInit } from '@angular/core';
import { CellClickedEvent, ColDef} from 'ag-grid-community';
import { Observable } from 'rxjs';
import { MyCellComponent } from '../my-cell/my-cell.component';


@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css'],
  
})
export class EditEmpComponent  {
  @Input() getempl!: GetEmployeesList;
  value:any;
  rowData$!: Observable<any[]>;

  getemplist:GetEmployeesList= {
    ID:0,
    Filter : '',
    PageNumber: 0,
    ItemCountPerPage: 5,
  }
  gridApi: any;
  
  read(gel:GetEmployeesList) {

    this.rowData$=this.http.post<any[]>('http://localhost:62920/person/readall',gel);
  
  }

  
  
  public colDefs:ColDef[]=[
    {field:'id'  },
    {field:'name'},
    {field:'family'},
    {field:'codemelli'},
    {field:'mobilenumber'},
    {field:'emailaddress'},
    {field:'Action' ,cellRenderer:MyCellComponent},
    
  ];

 
 public  defaultColDef:ColDef={
    sortable:true,
    filter:true, 
     
    
  }
  constructor(private http:HttpClient){}
  

  ngOnInit(){
    this.read(this.getemplist);
  
}

getSelectedRowData() {
  const selectedData = this.gridApi.getSelectedRows();
  return selectedData;
}

}
