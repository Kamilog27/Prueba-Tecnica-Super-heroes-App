import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarHeroesComponent } from './pages/agregar-heroes/agregar-heroes.component';
import { BuscarHeroesComponent } from './pages/buscar-heroes/buscar-heroes.component';
import { AgregarVehiculoComponent } from './pages/agregar-vehiculo/agregar-vehiculo.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoHeroesComponent } from './pages/listado-heroes/listado-heroes.component';
import { ListadoVehiculosComponent } from './pages/listado-vehiculos/listado-vehiculos.component';
import { SuperheroesRoutingModule } from './superheroes-routing.module';
import { MaterialModule } from '../material/material.module';
import { SuperheroeTarjetaComponent } from './components/superheroe-tarjeta/superheroe-tarjeta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AgregarHeroesComponent,
    BuscarHeroesComponent,
    AgregarVehiculoComponent,
    HomeComponent,
    ListadoHeroesComponent,
    ListadoVehiculosComponent,
    SuperheroeTarjetaComponent
  ],
  imports: [
    CommonModule,
    SuperheroesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SuperheroesModule { }
