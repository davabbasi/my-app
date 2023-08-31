import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { RepEmpComponent } from './rep-emp/rep-emp.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyCellComponent } from './my-cell/my-cell.component';
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddEmpComponent,
    EditEmpComponent,
    RepEmpComponent,
    PageNotFoundComponent,
    MyCellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'AddEmp', component: AddEmpComponent},
      {path:'EditEmp',component:EditEmpComponent},
      {path:'RepEmp',component:RepEmpComponent},
      {path: '', redirectTo: '/AddEmp', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent},
    ]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
