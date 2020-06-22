import { Injectable } from '@angular/core';
import { Palabra } from '../models/palabra'

@Injectable({
  providedIn: 'root'
})
export class PalabraService {

  palabrasJuego: Array<any>;

  constructor() {
    this.palabrasJuego = new Array<Palabra>();
    this.palabrasJuego = [
      {
        id: 1,
        img: "Mono.jpg",
        esp: "mono",
        ing: "monkey"
      },
      {
        id: 2,
        img: "conejo.jpg",
        esp: "conejo",
        ing: "rabbit"
      },
      {
        id: 3,
        img: "pavo.jpg",
        esp: "pavo",
        ing: "turkey"
      },
      {
        id: 4,
        img: "toro.jpg",
        esp: "toro",
        ing: "bull"
      },
      {
        id: 5,
        img: "oveja.jpg",
        esp: "oveja",
        ing: "sheep"
      },
      {
        id: 6,
        img: "delfin.jpg",
        esp: "delfin",
        ing: "dolphin"
      },
      {
        id: 7,
        img: "cangrejo.jpg",
        esp: "cangrejo",
        ing: "crab"
      },
      {
        id: 8,
        img: "oso.jpg",
        esp: "oso",
        ing: "bear"
      },
      {
        id: 9,
        img: "pato.jpg",
        esp: "pato",
        ing: "duck"
      },
      {
        id: 10,
        img: "caballo.jpg",
        esp: "caballo",
        ing: "horse"
      }
    ]
  }

  getPalabras(){
    return this.desordenarPalabras();
  }

  desordenarPalabras(){
    this.palabrasJuego = this.palabrasJuego.sort(function() {return Math.random() - 0.5});
    return this.palabrasJuego;
  }
}
