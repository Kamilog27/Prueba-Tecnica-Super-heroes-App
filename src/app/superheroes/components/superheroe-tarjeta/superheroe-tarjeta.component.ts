import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-superheroe-tarjeta',
  templateUrl: './superheroe-tarjeta.component.html',
  styles: [
  ]
})
export class SuperheroeTarjetaComponent implements OnInit {
  @Input() heroes!:Hero[];
  constructor() { }

  ngOnInit(): void {
  }

}
