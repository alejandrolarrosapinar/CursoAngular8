import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router ) { 
  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Si ponemos el parametro replaceURL a true, se elimina de la pila de rutas la última ruta que se ha almacenado
    //this.router.navigate(['/info'],{replaceUrl: true});
    return true;
  }

}
