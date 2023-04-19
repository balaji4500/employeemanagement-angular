import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  serviceproperty="service Created";
  nodeapiurl="http://localhost:3400";
  handleError:any="getting error from apicall"

  constructor(private http:HttpClient) { }

  postdata(data:any):Observable<any>{
    const header = {headers: new HttpHeaders({'content-type':'application/json'}) };
return this.http.post<any>(this.nodeapiurl+'/api/Contacts/create',data,header)
  }

  getcontact(){
    return this.http.get<any>(this.nodeapiurl+'/api/Contacts/retrieve')
  }
updatecontact(id:any):Observable<any>{
  const header={headers:new HttpHeaders({'content-type':'application/json'}),
  body:{_id:id} };
  return this.http.put(this.nodeapiurl+'/api/Contacts/update',header);
}
deletecontact(id:any){
  const header={headers:new HttpHeaders({'content-type':'application/json'}),
  body:{_id:id} };
  return this.http.delete(this.nodeapiurl+'/api/Contacts/delete',header);
}

}
