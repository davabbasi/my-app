import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private _http:HttpClient) { }

 async CreateUser(data:any):Promise<Observable<any>>{
     return  this._http.post('http://localhost:49990/User/Create',data)


  }
  
 async GetAllEmps(data:any):Promise<Observable<any>>{
     return this._http.post('http://localhost:49990/User/ReadAll', data)
  }


  DeleteEmp(id:any):Observable<any> {
    return this._http.get(`http://localhost:62920/person/delete/${id}`);

  }

  GetEmpByID(id:any):Observable<any> {
    return this._http.get('http://localhost:62920/person/read?id='+id);


  }


  async  GetData(this: any, params:any) {
    const res= await this._http.post('http://localhost:49990/User/ReadAll', params);
    return await res.json();
  
  }
    



  



  
}
