//Los imports/ herramientas que utiliza
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MascotasService } from '../shared/mascotas.service';


//Como esta compuesto...supongo
@Component({
  selector: 'app-mascotas-agregar',
  templateUrl: './mascotas-agregar.component.html',
  styleUrls: ['./mascotas-agregar.component.css']
})

//La clase que usa este componete
export class MascotasAgregarComponent implements OnInit {

///El coso (Variable) que poseee los darrtos que un usuario cargo en el formulario
public mascotaForm = this.fb.group({
    nombre: ['', Validators.required],
    tipo: ['',Validators.required],
    edad: ['', [Validators.required, Validators.pattern('[0-9]+')] ] ,
    descripcion: ['', Validators.required]   
  });

//Constructor
  constructor(private fb: FormBuilder, private ms: MascotasService) { }

  
  ngOnInit() {  }


//Metod para que los valores del formulario anterior se cargen dentro del 'JSON' de mascotas que enrootie antes
  updatePet() {
  this.ms.addMascota( this.mascotaForm.value);
  }

limpiar(){
  this.mascotaForm.reset();
}



}
