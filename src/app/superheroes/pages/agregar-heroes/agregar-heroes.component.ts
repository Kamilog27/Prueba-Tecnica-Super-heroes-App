import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../interfaces/heroes.interface';
interface Grupo {
  value: string,
  viewValue: string
}
interface Condicion {
  value: string,
  viewValue: string
}

@Component({
  selector: 'app-agregar-heroes',
  templateUrl: './agregar-heroes.component.html',
  styles: [
  ]
})
export class AgregarHeroesComponent implements OnInit {

  grupos: Grupo[] = [
    { value: "Súper Heroes", viewValue: 'Súper Heroes' },
    { value: "Villanos", viewValue: 'Villanos' }
  ]
  condiciones: Condicion[] = [
    { value: "Libertad", viewValue: 'Libertad' },
    { value: "Detenido", viewValue: 'Detenido' },
    { value: "Desconocido", viewValue: 'Desconocido' }
  ]
  heroe: Hero = {
    nombre: '',
    grupo: '',
    ciudad: '',
    condicion: '',
    poder: [],
    vehiculo: '',
    imagen: ''
  }

  tipos: string[] = ["Si", "No"];

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder) { }

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(1)]],
    grupo: ['', [Validators.required]],
    ciudad: ['', [Validators.required, Validators.minLength(2)]],
    condicion: ['', [Validators.required]],
    poder: ['', [Validators.required]],
    vehiculo: ['', [Validators.required]],
    nombreVehiculo: ['', [Validators.required, Validators.minLength(1)]],
    tipo: ['', [Validators.required, Validators.minLength(1)]],
    imagen: ['', [Validators.required]]
  })

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(_id => {
        console.log(_id)
      })
  }
  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
  campoesValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  validarVehiculo() {

    if (this.miFormulario.get('vehiculo')?.value == 'No') {
      this.miFormulario.get('nombreVehiculo')?.setValue('Ninguno');
      this.miFormulario.get('tipo')?.setValue('Ninguno');
    }

    return this.miFormulario.controls?.['vehiculo'].value == 'Si';
  }
}
