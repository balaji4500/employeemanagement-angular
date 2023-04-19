import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { ServiceService } from '../service.service';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
contactlist:any;
isedit:any=false;
data:any;
  id:any;
  userarray=[
{
"id":"details",
"firstname":'firstname',
"lastname":'lastname',
"email":'email',
"password":"password",
"Address":"Address",
"is.edit":false
}
 ]

constructor ( private service:ServiceService){}
ngOnInit(){  
  this.getcon();
}

getcon(){
  this.service.getcontact().subscribe((res)=>{
    this.contactlist=res;
  })
}

deleteUser(id:any){
  this.service.deletecontact(id).subscribe((res)=>{
    this.getcon();
  })
}
onedit(id:any){
  id.isedit=true;
  }
  
  update(id:any,fname:any){
    debugger;
this.service.updatecontact(id).subscribe((res)=>{
  })
  }
  
   closeedit(id:any){
   id.isedit=false;
   }
}

  export class contactlist{
firstname:any;
lastname:any;
email:any;
password:any;
Address:any;
 }



