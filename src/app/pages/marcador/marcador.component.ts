import { Component, OnInit } from '@angular/core';
import { ComunicaNuevoMarcadorService } from 'src/app/services/comunica-nuevo-marcador.service';

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.css']
})
export class MarcadorComponent implements OnInit {

  marcador: number;
  constructor(private servicio: ComunicaNuevoMarcadorService) { 
    this.marcador = 0;
    servicio.marcador2$.subscribe(correct=>{
        this.marcador = correct;
    });
  }

  ngOnInit() {
  }

  //este metodo esta esperando a que el hijo lo llame con el emitter -> destino
  actualizacion(event){
    this.marcador=event;
  }

}
