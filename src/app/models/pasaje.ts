import { Adelantos } from './adelantos';

export class Pasaje {
    _id:string;
    dniPasajero:number;
    precioPasaje:number;
    categoriaPasajero:string;
    fechaCompra:Date;
    adelantos:Array<Adelantos>;
    habilitar:boolean=true;

    Pasaje(_id?:string,dniPasajero?:number, precioPasaje?:number, categoriaPasajero?:string, fechaCompra?:Date,adelantos?:Array<Adelantos>){
        this._id=_id;
        this.dniPasajero=dniPasajero;
        this.precioPasaje=precioPasaje;
        this.categoriaPasajero=categoriaPasajero;
        this.fechaCompra=fechaCompra;
        this.adelantos=adelantos;
    }
}
