import { Component , OnInit} from '@angular/core';
import { FormBuilder,FormControl,FormGroup ,Validators} from '@angular/forms';
import { ServicesService } from './../services.service';


@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent {
  patchValue(arg0: { FName: any; LName: any;NationalCode:any ;PhoneNumber: any; EmailAddress: any;Password:any }) {
    throw new Error('Method not implemented.');
  }
  
  
  Empform: FormGroup;
  constructor(_fb:FormBuilder ,private srvice:ServicesService){
    this.Empform=  _fb.group({
      FName:[""],
      LName:[""],
      NationalCode:[""],
      PhoneNumber:[""],
      EmailAddress:[""],
      Password:[""],
    })
  }

  SubmitForm(){
    this.srvice.CreateUser(this.Empform.value).subscribe({
      next(valu:any) {
        alert(valu);

        
      },
      error:(err:any)=>{
        console.error(err);
      }
    })

 
    
  }
  
}
