import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { Column, ICellRendererParams } from 'ag-grid-community';
@Component({
  selector: 'app-my-cell',
  template: `
   <button (click)="onClick($event)" >click</button>
  `,
  styles: [
  ]
})
export class MyCellComponent implements OnInit,ICellRendererAngularComp {
  value:any;
  gridApi: any;
  agInit(params: ICellRendererParams): void {
    this.value= params.columnApi.getColumn(1)
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return false;
   }

   onClick(value:any){
    alert ('cell value is '+this.value);

  }
  ngOnInit(): void {
  }
  
  
}
