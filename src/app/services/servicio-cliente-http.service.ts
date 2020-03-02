import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from 'protractor';
import { Observable } from 'rxjs';
import { Info } from '../interfaces/info';

@Injectable({
  providedIn: 'root'
})
export class ServicioClienteHttpService {

  url: string;
  
  constructor(private clienteHttp:HttpClient) {
    this.url='https://api.github.com/users/ServerJon';
  }

  loadInfo(): Observable <Object> {
    //alert(this.url);
    return this.clienteHttp.get(this.url);
  }
}
