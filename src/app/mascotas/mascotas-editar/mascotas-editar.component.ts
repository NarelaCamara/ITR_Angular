import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MascotasService } from '../shared/mascotas.service';
import {  ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-mascotas-editar',
  templateUrl: './mascotas-editar.component.html',
  styleUrls: ['./mascotas-editar.component.css']
})

export class MascotasEditarComponent implements OnInit {
  public mascotaForm = this.fb.group({
    id: [''],
    nombre: ['', Validators.required],
    tipo: ['', Validators.required],
    edad: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    descripcion: ['', Validators.required]
  });
  

  constructor( private route: ActivatedRoute, private fb: FormBuilder,private ms: MascotasService) { }
 

ngOnInit( ) {
    let id: number =  parseInt( this.route.snapshot.paramMap.get('id'));
    this.ms.getMascota(id).subscribe((data) => { this.mascotaForm.setValue(data)  });
  }

  editarMascota(){
    this.ms.editMascota( this.mascotaForm.value);
  }
 


  


}
