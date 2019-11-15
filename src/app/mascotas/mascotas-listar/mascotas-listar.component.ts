import { Component } from '@angular/core';
import { MascotasService } from '../shared/mascotas.service';
import { Mascota } from '../shared/mascota';
import { Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-mascotas-listar',
  templateUrl: './mascotas-listar.component.html',
  styleUrls: ['./mascotas-listar.component.css']
})
export class MascotasListarComponent {

  public mascotas: Array<Mascota> = [];

  public mascotaForm = this.fb.group({
    id: [''],
    nombre: ['', Validators.required],
    tipo: ['', Validators.required],
    edad: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    descripcion: ['', Validators.required]
  });



  constructor(private fb: FormBuilder, private mascotasService: MascotasService) { }


  ngOnInit() {
    this.mascotasService.getMascotas().subscribe((data) => {
      this.mascotas = data;
    })
  }


  borrarMascota(id: number) {
    this.mascotasService.deleteMascota(id).subscribe(data => {
      this.mascotasService.getMascotas( ).subscribe( listaActual => this.mascotas = listaActual );
    })
  }



}

