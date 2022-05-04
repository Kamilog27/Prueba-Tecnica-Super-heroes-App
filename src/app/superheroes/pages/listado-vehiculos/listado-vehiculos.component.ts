import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../interfaces/vehiculo.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado-vehiculos',
  templateUrl: './listado-vehiculos.component.html',
  styles: [
  ]
})
export class ListadoVehiculosComponent implements OnInit {

  constructor(private heroesService:HeroesService) { }
  vehiculos:Vehiculo[]=[];

  ngOnInit(): void {
    this.heroesService.getVehiculos()
      .subscribe((resp:any)=>{
        this.vehiculos=resp[0].vehiculos;
      })
  }

}
