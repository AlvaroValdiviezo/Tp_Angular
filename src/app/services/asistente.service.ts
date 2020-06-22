import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {observable,Observable} from 'rxjs'
import { Asistente } from '../models/asistente';

@Injectable({
  providedIn: 'root'
})
export class AsistenteService {

  urlBase:string ="http://localhost:3000/api/punto1/";

  constructor(private _http:HttpClient) { }

  public agregarAsis(asis:Asistente):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        "Content-Type":"application/json"
      })
    };
    var body=JSON.stringify(asis);
    return this._http.post(this.urlBase,body ,httpOptions);
  }
  
  public actualizarT():Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        
      })
    };
    
    return this._http.get(this.urlBase,httpOptions);
  }

  public EliminarA(asis:Asistente):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        
      })
    };
    
    return this._http.delete(this.urlBase+asis._id,httpOptions);
  }
  
  public modificar(asis:Asistente):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        "Content-Type":"application/json"
      })
    };
    var body=JSON.stringify(asis);
    return this._http.put(this.urlBase+asis._id, body ,httpOptions); 
  }
}
