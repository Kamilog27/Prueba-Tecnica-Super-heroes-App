import { Component, OnInit } from '@angular/core';
import { Hero, Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado-heroes',
  templateUrl: './listado-heroes.component.html',
  styles: [
  ]
})
export class ListadoHeroesComponent implements OnInit {
  heroes!:Hero[];
  constructor(private heroesService:HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes()
    .subscribe(heroes=>{
      this.heroes=heroes[0].heroes;
    })
  }

}
