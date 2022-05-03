import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Hero } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar-heroes',
  templateUrl: './buscar-heroes.component.html',
  styles: [
  ]
})
export class BuscarHeroesComponent implements OnInit {
  termino: string = '';
  terminoD:string='';

  heroesNombre: Hero[] = [];
  heroesCiudad: Hero[] = [];

  heroeSeleccionado!:Hero[] | undefined;
  heroeSeleccionadoD!:Hero[] | undefined;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {

  }
  buscandoPorNombre() {
    this.heroesService.getSugerencias(this.termino)
      .subscribe(heroes => {
        
        this.heroesNombre = heroes[0].heroesnom;

      })
  }
  buscandoPorCiudad(){
    this.heroesService.getSugerencias(this.terminoD)
      .subscribe(heroes => {
        this.heroesCiudad = heroes[0].heroesciu;

      })
  }
  opcionSeleccionada(event:MatAutocompleteSelectedEvent){
    if(!event.option.value){
      this.heroeSeleccionado=undefined;
      return;
    }
    const heroe:Hero=event.option.value;
    this.termino=heroe.nombre;
    this.heroeSeleccionado=this.heroesNombre;
  }
  opcionSeleccionadaD(event:MatAutocompleteSelectedEvent){
    if(!event.option.value){
      this.heroeSeleccionadoD=undefined;
      return;
    }
    const heroeD:Hero=event.option.value;
    this.terminoD=heroeD.ciudad;
    this.heroeSeleccionadoD=this.heroesCiudad;
  }
}
