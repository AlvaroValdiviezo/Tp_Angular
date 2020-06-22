import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {observable,Observable} from 'rxjs'
import { Mensaje } from '../models/mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  urlBase:string ="http://localhost:3000/api/punto2/";

  constructor(private _http:HttpClient) { }

  public agregarMensaje(men:Mensaje):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        "Content-Type":"application/json"
      })
    };
    var body=JSON.stringify(men);
    return this._http.post(this.urlBase,body ,httpOptions);
  }
  
  public actualizarT():Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        
      })
    };
    
    return this._http.get(this.urlBase,httpOptions);
  }

  public EliminarM(men:Mensaje):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        
      })
    };
    
    return this._http.delete(this.urlBase+men._id,httpOptions);
  }
  
  public modificarM(men:Mensaje):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        "Content-Type":"application/json"
      })
    };
    var body=JSON.stringify(men);
    return this._http.put(this.urlBase+men._id, body ,httpOptions); 
  }
}

