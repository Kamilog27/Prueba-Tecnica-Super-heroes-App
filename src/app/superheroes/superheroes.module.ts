import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarHeroesComponent } from './pages/agregar-heroes/agregar-heroes.component';
import { BuscarHeroesComponent } from './pages/buscar-heroes/buscar-heroes.component';
import { AgregarVehiculoComponent } from './pages/agregar-vehiculo/agregar-vehiculo.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoHeroesComponent } from './pages/listado-heroes/listado-heroes.component';
import { ListadoVehiculosComponent } from './pages/listado-vehiculos/listado-vehiculos.component';
import { SuperheroesRoutingModule } from './superheroes-routing.module';



@NgModule({
  declarations: [
    AgregarHeroesComponent,
    BuscarHeroesComponent,
    AgregarVehiculoComponent,
    HomeComponent,
    ListadoHeroesComponent,
    ListadoVehiculosComponent
  ],
  imports: [
    CommonModule,
    SuperheroesRoutingModule
  ]
})
export class SuperheroesModule { }
