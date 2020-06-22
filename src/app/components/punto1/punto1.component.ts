import { Component, OnInit } from '@angular/core';
import {Mensaje} from './../../models/mensaje';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Empresa } from 'src/app/models/empresa';
import { MensajeService } from 'src/app/services/mensaje.service';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {


  msj: Mensaje;
  tamTextMax:number = 20;
  textTam:number;
  listadoEmpresas:Array<Empresa>;

  listadoMensajes:Array<Mensaje>;

  constructor(public modal: NgbModal,private ms:MensajeService,private es:EmpresaService) {
    this.msj=new Mensaje();
    this.listadoMensajes=new Array<Mensaje>();
    this.listadoEmpresas=new Array<Empresa>();
    this.actualizarTab();
    this.actualizarlista();
   }

  ngOnInit(): void {
  }

  public cambiarTamTexto(){
    this.textTam = this.msj.texto.length;
    console.log(this.textTam);
  }
  public enviarMensaje(){
    this.msj.fecha=new Date();
    this.ms.agregarMensaje(this.msj).subscribe(
      (result)=>{
        alert("Mensaje Enviado")
      },
      (error)=>{
        console.log(error);
      }
      );
      console.log(this.msj);
      this.msj=new Mensaje();
      this.actualizarTab();
  }
  public limpiarMensaje(){
    this.msj=new Mensaje();
  }

  public actualizarTab(){
    this.listadoMensajes=new Array<Mensaje>();
    this.ms.actualizarT().subscribe(
      (result)=>{
        Object.assign(this.listadoMensajes,result);
      }
    )
    console.log(this.listadoMensajes);
  }

  public actualizarlista(){
    this.listadoEmpresas=new Array<Empresa>();
    this.es.actualizarT().subscribe(
      (result)=>{
        Object.assign(this.listadoEmpresas,result);
      }
    )
    console.log(this.listadoEmpresas);
  }


}


