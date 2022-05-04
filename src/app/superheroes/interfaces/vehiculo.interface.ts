import { Hero } from "./heroes.interface";

export interface Vehiculo{
    ok:     boolean;
    vehiculos: Vehiculo[];
}

export interface Vehiculo{
    _id?:       string;
    tipo: string;
    nombreVehiculo:string;
    heroes:Hero;
    __v:string;

} 