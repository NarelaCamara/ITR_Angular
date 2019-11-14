import { Component } from '@angular/core';
import { Mascota } from '../../shared/mascota';
import { MascotasService } from '../../shared/mascotas.service';


@Component({
  selector: 'app-mascotas-listar',
  templateUrl: './mascotas-listar.component.html',
  styleUrls: ['./mascotas-listar.component.css']
})
export class MascotasListarComponent{

  public mascotas: Array<Mascota> = [];

  constructor(private mascotasService: MascotasService) { }

  ngOnInit() {
    this.mascotasService.getMascotas().subscribe((data) => {
      this.mascotas = data;
    })
  }

}

