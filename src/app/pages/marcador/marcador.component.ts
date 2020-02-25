import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.css']
})
export class MarcadorComponent implements OnInit {

  marcador: number;
  constructor() { 
    this.marcador = 0;
  }

  ngOnInit() {
  }

  //este metodo esta esperando a que el hijo lo llame con el emitter -> destino
  actualizacion(event){
    this.marcador=event;
  }

}
