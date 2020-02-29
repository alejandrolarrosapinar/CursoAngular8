import { Component, OnInit } from '@angular/core';
import { ComunicaNuevoMarcadorService } from 'src/app/services/comunica-nuevo-marcador.service';

@Component({
  selector: 'app-editar-nuevo-marcador',
  templateUrl: './editar-nuevo-marcador.component.html',
  styleUrls: ['./editar-nuevo-marcador.component.css']
})
export class EditarNuevoMarcadorComponent implements OnInit {


  marcador: number;
  constructor(private servicio: ComunicaNuevoMarcadorService) {
    this.marcador = 0;
  }

  sumar() {
    this.marcador++;
  }

  restar() {
    this.marcador--;
  }

  actualizar() {
    this.servicio.changeMarcador(this.marcador);
  }

  ngOnInit() {
  }

}
