import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs';
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
    { value: "Libre", viewValue: 'Libre' },
    { value: "Detenido", viewValue: 'Detenido' },
    { value: "Desconocido", viewValue: 'Desconocido' }
  ]

  tipo: string[] = ["Si", "No"];

  paginaEditar: Boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder,
    private heroeService: HeroesService, private router: Router) { }

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

  miFormularioEditar: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(1)]],
    ciudad: ['', [Validators.required, Validators.minLength(2)]],
  })
  ngOnInit(): void {
    if (this.router.url.includes('editar')) {
      this.paginaEditar = true;

      this.activatedRoute.params
        .pipe(
          switchMap(({ id }) => this.heroeService.getHeroe(id))
        )
        .subscribe((heroe: any) => {
          console.log(heroe);
          this.miFormularioEditar.get('nombre')?.setValue(heroe.heroe.nombre);
          this.miFormularioEditar.get('ciudad')?.setValue(heroe.heroe.ciudad);

        })
    }
     
    
  }
  editar(){
    if (this.miFormularioEditar.invalid) {
      this.miFormularioEditar.markAllAsTouched();
      return;
    }
    console.log('editar');
    this.activatedRoute.params.subscribe(({id})=>{
      let heroeId=id;
      let nombreH=this.miFormularioEditar.get('nombre')?.value;
      let ciudadH=this.miFormularioEditar.get('ciudad')?.value;
      this.heroeService.putHeroes(heroeId,nombreH,ciudadH)
        .subscribe((resp:any)=>{
          console.log(resp);
          Swal.fire({
            icon: 'success',
            title: 'Éxito!!!',
            text: `${resp.msg}`,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
  
          })
          this.router.navigateByUrl('superheroes/listadoheroes');
        })
    })
    

  }
  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    let poderStr = this.miFormulario.get('poder')?.value;
    let convertirArr = poderStr.split(',');

    this.miFormulario.get('poder')?.setValue(convertirArr);

    let nomVehiculo = this.miFormulario.get('nombreVehiculo')?.value;
    let tipoVehiculo = this.miFormulario.get('tipo')?.value;

    this.heroeService.postHeroes(this.miFormulario.value)
      .subscribe((res: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Éxito!!!',
          text: 'El Heroe Se Creó Exitosamente',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        this.router.navigateByUrl('superheroes/listadoheroes');
        if (res.heroe.vehiculo == 'No') {

        } else if (res.heroe.vehiculo == 'Si') {
          let heroeId = res.heroe._id;
          this.heroeService.postVehiculo(nomVehiculo, tipoVehiculo, heroeId)
            .subscribe((res: any) => {
              Swal.fire({
                icon: 'success',
                title: 'Éxito!!!',
                text: 'El Heroe Se Creó Exitosamente',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }

              })
              this.router.navigateByUrl('superheroes/listadoheroes');
            })
        }
      })
    this.miFormulario.reset();
  }
  campoesValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }
  campoesValidoEditar(campo: string) {
    return this.miFormularioEditar.get(campo)?.invalid && this.miFormularioEditar.get(campo)?.touched;
  }

  validarVehiculo() {

    if (this.miFormulario.get('vehiculo')?.value == 'No') {
      this.miFormulario.get('nombreVehiculo')?.setValue('Ninguno');
      this.miFormulario.get('tipo')?.setValue('Ninguno');
    }

    return this.miFormulario.controls?.['vehiculo'].value == 'Si';
  }
}
