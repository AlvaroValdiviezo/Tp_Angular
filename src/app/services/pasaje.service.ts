import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {observable,Observable} from 'rxjs';
import { Pasaje } from '../models/pasaje';

@Injectable({
  providedIn: 'root'
})
export class PasajeService {
  urlBase:string ="http://localhost:3000/api/punto3/";

  constructor(private _http:HttpClient) { 
  }

  

  public agregarPasaje(psj:Pasaje):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        "Content-Type":"application/json"
      })
    };
    var body=JSON.stringify(psj);
    return this._http.post(this.urlBase,body ,httpOptions);
  }
  
  public actualizarT():Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        
      })
    };
    
    return this._http.get(this.urlBase,httpOptions);
  }

  public EliminarP(psj:Pasaje):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        
      })
    };
    
    return this._http.delete(this.urlBase+psj._id,httpOptions);
  }
  
  public modificarP(psj:Pasaje):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        "Content-Type":"application/json"
      })
    };
    var body=JSON.stringify(psj);
    return this._http.put(this.urlBase+psj._id, body ,httpOptions); 
  }
  
}
