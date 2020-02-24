import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  // Cargame este servicio en el módulo principal cuando cargues la aplicación
  // Asi no se nos olvida establecerlo en el módulo principal
  providedIn: 'root'
})
export class CategoriasService {

  constructor() {
    
  }

  sumarNumeros(numero1: number, numero2: number): number {
    return numero1 + numero2;
  }

  obtenerDatos(){
    
  }


}
