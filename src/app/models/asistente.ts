export class Asistente {
    _id:number;
    usuario: String;
    nombreOrg: String;
    solicitarConst: boolean;

    Asistente(_id?:number,usuario?:String,nombreOrg?:String, solicitarConst?:boolean){
        this._id=_id;
        this.usuario = usuario;
        this.nombreOrg = nombreOrg;
        this.solicitarConst = solicitarConst;
    }
}
