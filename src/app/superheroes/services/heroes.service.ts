import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private base_url:string=environment.base_url;
  constructor(private http:HttpClient) { }

  getHeroes(){
    return this.http.get<Heroe[]>(`${this.base_url}/heroes`);
  }
  getSugerencias(termino:string):Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.base_url}/buscar/${termino}`);
    
  }
}
