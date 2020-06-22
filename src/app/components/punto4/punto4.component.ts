import { Component, OnInit } from '@angular/core';
import { Palabra } from '../../models/palabra';
import { PalabraService } from '../../services/palabra.service';

@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css']
})
export class Punto4Component implements OnInit {
  cantPuntaje: number = 0;
  cantVidas: number = 6;
  tamPalabra: number;
  palabra: string;
  listaPalabras: Array<Palabra>;
  palabrasJuego: Array<any>;
  letras: Array<string>;
  d: Array<string>;
  ind: number;

  constructor(private palabraService: PalabraService) {
    this.iniciar();
    }

  obtenerPalabras() {
    this.listaPalabras = this.palabraService.getPalabras();
  }

  iniciar(){
    this.obtenerPalabras();
    this.letras = new Array<string>();
    this.ind = 0;
    this.palabra = this.listaPalabras[this.ind].ing;
    this.tamPalabra = this.palabra.length;
    this.d = this.palabra.split("");
    this.cantPuntaje = 0;
    this.cantVidas= 6;
  }

  comparar(j: number){
    if(this.letras.join("").toLowerCase() == this.palabra){
      this.cantPuntaje++;
      if (this.cantPuntaje==10) {
        var result=window.confirm("Felicidades!!!!\n"+"Su puntuacion es: "+this.cantPuntaje + "\nFin del juego..." );
        if(result){
          this.iniciar();
        }
      }
      this.cambiarPalabra();
    }
    else{
      if(this.letras[j]!=this.d[j] && this.letras[j]!=""){
        this.cantVidas--;
      }
    }
    if(this.cantVidas==0){
      window.alert("Se a quedado sin vidas\n"+"Su puntuacion es: "+this.cantPuntaje + "\nFin del juego :(" );
      this.iniciar();
    }
  }

  cambiarPalabra(){
    this.letras = new Array<string>();
    this.ind++;
    this.palabra = this.listaPalabras[this.ind].ing;
    this.d = this.palabra.split("");
    this.tamPalabra = this.palabra.length;
  }

  ngOnInit(): void {
  }

}
