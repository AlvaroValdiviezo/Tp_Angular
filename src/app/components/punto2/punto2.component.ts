import { Component, OnInit } from '@angular/core';
import { Asistente } from './../../models/asistente';
import { AsistenteService } from 'src/app/services/asistente.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {

  asis: Asistente;
  listaAsistencia : Array<Asistente>;

  constructor(private as:AsistenteService,public modal: NgbModal) { 
    this.asis =new Asistente();
    this.listaAsistencia=new Array<Asistente>();
    this.actualizarTab();
  }

  public actualizarTab(){
    this.listaAsistencia=new Array<Asistente>();
    this.as.actualizarT().subscribe(
      (result)=>{
        Object.assign(this.listaAsistencia,result);
      }
    )
    console.log(this.listaAsistencia);
  }
  

  ngOnInit(): void {
  }
  public elegirAsis(asistente:Asistente){
    this.asis = asistente;
  }

  public agregarAsistencia(){
    // this.listaAsistencia.push(this.asis);
     
    this.as.agregarAsis(this.asis).subscribe(
      (result)=>{
        alert("Asistente Guardado")
      },
      (error)=>{
        console.log(error);
      }
      );
      console.log(this.asis);
      this.asis=new Asistente();
      this.actualizarTab();
  }

  public eliminarAs(asistente:Asistente){
    this.as.EliminarA(asistente).subscribe(
      (result)=>{
        alert("Asistente Eliminado")
      },
      (error)=>{
        console.log(error);
      }
    )
    this.actualizarTab();
  }

  public modificarAsis(){
    this.as.modificar(this.asis).subscribe(
      (result)=>{
        alert("Asistente Modificado")
      },
      (error)=>{
        console.log(error);
      }
    )
    this.asis=new Asistente();
    this.actualizarTab();
  }
 public limIn(){
   this.asis=new Asistente();
 }

}
