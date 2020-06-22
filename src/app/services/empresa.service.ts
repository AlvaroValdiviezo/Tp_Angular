import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {observable,Observable} from 'rxjs'
import { Empresa } from '../models/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  urlBase:string ="http://localhost:3000/api/empresa/";

  constructor(private _http:HttpClient) { }

  public agregarEmp(emp:Empresa):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        "Content-Type":"application/json"
      })
    };
    var body=JSON.stringify(emp);
    return this._http.post(this.urlBase,body ,httpOptions);
  }
  
  public actualizarT():Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        
      })
    };
    
    return this._http.get(this.urlBase,httpOptions);
  }

}
