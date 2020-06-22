import { Component, OnInit } from '@angular/core';  
import { Pasaje } from './../../models/pasaje';
import { PasajeService } from './../../services/pasaje.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Adelantos } from 'src/app/models/adelantos';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {
  adelanto:Adelantos;
  psj:Pasaje;
  registroPasajes:Array<Pasaje>;
  precioDes:number;
  precioTot:number;
  prec:number;
  mostrar:boolean=false;
  band:boolean=false;

  constructor(private psjServ:PasajeService,public modal:NgbModal) {
    this.psj=new Pasaje();
    this.adelanto=new Adelantos(); 
    this.registroPasajes=new Array<Pasaje>();
    this.refrescar();
  }

  ngOnInit(): void {
  }
  public registrarPasaje(){
    this.psj.fechaCompra=new Date();
    this.psj.adelantos=new Array<Adelantos>();
    this.psjServ.agregarPasaje(this.psj).subscribe(
      (result)=>{
        alert("Pasaje Guardado")
      },
      (error)=>{
        console.log(error);
      }
      )
      console.log(this.psj);
    this.psj=new Pasaje();
    this.refrescar();
  }
  
  public refrescar(){
    var pas : Pasaje = new Pasaje();
    this.registroPasajes= new Array<Pasaje>();
    var j: number=0;
    this.psjServ.actualizarT().subscribe(
      (result)=>{
        for(let i in result)
        {
          pas = new  Pasaje();
         Object.assign(pas,result[i]);
         j=0;
         for(let i in pas.adelantos)
         {
          j= j + pas.adelantos[i].montoAdelanto;
         }
         if(j>=pas.precioPasaje)
         {
          pas.habilitar=false;
         }
         this.registroPasajes.push(pas);
        }
      }
    );
  }
  public agregarAdelanto(){
    this.adelanto.fecha=new Date();
    this.adelanto._id=(Math.random()*100000+1);
    this.psj.adelantos.push(this.adelanto);
    
    this.psjServ.modificarP(this.psj).subscribe(
      (result)=>{
        alert("Pasaje Modificado")
      },
      (error)=>{
        console.log(error);
      }
    )
    this.adelanto=new Adelantos();
    this.refrescar();
  }
  public modificarPasaje(){
    this.psjServ.modificarP(this.psj).subscribe(
      (result)=>{
        alert("Pasaje Modificado")
      },
      (error)=>{
        console.log(error);
      }
    )
    this.psj=new Pasaje();
    this.refrescar();
  }
  public eliminarPasaje(psj:Pasaje){
    this.psjServ.EliminarP(psj).subscribe(
      (result)=>{
        alert("Pasaje Eliminado")
      },
      (error)=>{
        console.log(error);
      }
    )
    this.refrescar();
  }

  
  public calcularTotal()
  {
    if(this.psj.categoriaPasajero=='m')
    {
      this.precioDes=(this.psj.precioPasaje*25)/100;
      this.precioTot=this.psj.precioPasaje-this.precioDes;
      this.mostrar=true;
    
    }
    else{
      if(this.psj.categoriaPasajero=='j')
      {
        this.precioDes=(this.psj.precioPasaje*50)/100;
        this.precioTot=this.psj.precioPasaje-this.precioDes;
        this.mostrar=true;
      
      }
      else{
      
      }
    }
  }
  public elegirPasaje(pasj:Pasaje){
    this.psj=pasj;
  }
  public borrarAdelanto(idAdelanto:number){
    var idBorrar=this.psj.adelantos.findIndex((item:Adelantos)=>item._id==idAdelanto);
    this.psj.adelantos.splice(idBorrar,1);

    this.modificarPasaje();
    this.refrescar();
  }
 

}
