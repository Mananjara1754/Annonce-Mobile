import { DriverInterface } from "../interface/driver";

export class Driver {
    id!: number;
    _nom!: string;
    _prenom!: string;
    _plaque!: string;
    _marque!:string;
    _modele!:string;
    _prix!: number;
    _note!: number;
    _distance!: number;
    _lat!: number;
    _lng!: number;
    sending: number = 0;   // 0 = pas envoyé, 1 en cours d'envoi, 2 envoyé 

    
    constructor() {
    }

    byJSON( d : DriverInterface) : void {
        Object.assign(this, d);
    }
}