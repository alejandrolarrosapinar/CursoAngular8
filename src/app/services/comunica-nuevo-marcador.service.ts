import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicaNuevoMarcadorService {

  private marcador = new Subject<number>();

  marcador$ = this.marcador.asObservable();

  changeMarcador(marcador: number){
    this.marcador.next(marcador);
  }

  constructor() { }
}
