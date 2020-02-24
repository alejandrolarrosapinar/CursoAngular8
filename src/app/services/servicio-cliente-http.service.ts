import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from 'protractor';
import { Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class ServicioClienteHttpService {

  url: string;
  
  constructor(private clienteHttp:HttpClient) {
    this.url='https://api.github.com/users/ServerJon';
    //this.url = 'http://localhost:8080/loginGet';
  }

  loadInfo(): Observable <User> {
    //alert(this.url);
    return this.clienteHttp.get(this.url);
  }
}
