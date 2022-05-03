import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule}from '@angular/router';
import { ListadoHeroesComponent } from './pages/listado-heroes/listado-heroes.component';
import { AgregarHeroesComponent } from './pages/agregar-heroes/agregar-heroes.component';
import { BuscarHeroesComponent } from './pages/buscar-heroes/buscar-heroes.component';
import { ListadoVehiculosComponent } from './pages/listado-vehiculos/listado-vehiculos.component';
import { AgregarVehiculoComponent } from './pages/agregar-vehiculo/agregar-vehiculo.component';
import { HomeComponent } from './pages/home/home.component';

const routes:Routes=[
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'listadoheroes',
        component:ListadoHeroesComponent
      },
      {
        path:'agregarheroes',
        component:AgregarHeroesComponent
      },
      {
        path:'editar/:id',
        component:AgregarHeroesComponent
      },
      {
        path:'buscarheroes',
        component:BuscarHeroesComponent
      },
      {
        path:'listadovehiculos',
        component:ListadoVehiculosComponent
      },
      {
        path:'agregarvehiculo',
        component:AgregarVehiculoComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports:[
    RouterModule
  ]
})
export class SuperheroesRoutingModule { }
