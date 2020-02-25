import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modificar-marcador',
  templateUrl: './modificar-marcador.component.html',
  styleUrls: ['./modificar-marcador.component.css']
})
export class ModificarMarcadorComponent implements OnInit {


  @Input()   marcadorHijo : number;
  @Output()  actualizar= new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  modificarPadre(){
    console.log('Modificar padre');
  }

  sumar(){
    this.marcadorHijo++;
  }

  restar(){
    this.marcadorHijo--;
  }

  //enviamos al padre ->origen
  actualizacion($event) {
    console.log('enviamos al padre');
    this.actualizar.emit(this.marcadorHijo);
    console.log('despues del emit');
  }

}
