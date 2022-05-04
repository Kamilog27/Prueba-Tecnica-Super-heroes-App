import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../interfaces/heroes.interface';
import { Vehiculo } from '../interfaces/vehiculo.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private base_url:string=environment.base_url;
  constructor(private http:HttpClient) { }

  getHeroes(){
    return this.http.get<Heroe[]>(`${this.base_url}/heroes`);
  }
  getHeroe(id:string){
    return this.http.get<Heroe>(`${this.base_url}/heroe/${id}`);
  }
  getSugerencias(termino:string):Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.base_url}/buscar/${termino}`);
    
  }
  postHeroes(form:Heroe){
    return this.http.post<Heroe>(`${this.base_url}/heroes`,form);
  }
  postVehiculo(nombreVehiculo:string,tipo:string,heroes:string){
    return this.http.post<Vehiculo>(`${this.base_url}/vehiculos`,{nombreVehiculo,tipo,heroes});
  }
  putHeroes(id:string,nombre:string,ciudad:string){
    return this.http.put<Heroe>(`${this.base_url}/heroe/${id}`,{nombre,ciudad});
  }
  getVehiculos(){
    return this.http.get<Vehiculo>(`${this.base_url}/vehiculos`);
  }
}
