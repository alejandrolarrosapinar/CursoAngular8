import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicaNuevoMarcadorService {

  //si inicializamos con behaviorsubject
  private marcador2 = new BehaviorSubject(0);
  private marcador = new Subject<number>();

  marcador$ = this.marcador.asObservable();
  marcador2$ = this.marcador2.asObservable();

  changeMarcador(marcador: number){
    this.marcador.next(marcador);
    this.marcador2.next(marcador);
  }

  constructor() { }
}
