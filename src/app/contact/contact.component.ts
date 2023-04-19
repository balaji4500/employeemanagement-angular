import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators  } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  ngForm!: FormGroup;
  submit=false;
data:any; 
  constructor(private formbulider:FormBuilder,private service:ServiceService){}

  ngOnInit() {
    this.ngForm= this.formbulider.group({      
      firstname: ["",Validators.required],
      lastname : ["",Validators.required],
      email : ["",[Validators.required,Validators.email]],
      password : ["",Validators.required],
      Address :  ["",Validators.required]
    })
  }
  get fu() {
    return this.ngForm.controls;}
    
onClickSubmit(data:any){
this.submit=true;
if(this.ngForm.invalid){
  return;
}
else{
  this.service.postdata(data).subscribe(res=>{
    res;
    alert('Data saved successfully')
      })

}
}




}



