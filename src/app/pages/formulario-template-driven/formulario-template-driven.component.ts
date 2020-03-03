import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';

@Component({
  selector: 'app-formulario-template-driven',
  templateUrl: './formulario-template-driven.component.html',
  styleUrls: ['./formulario-template-driven.component.css']
})
export class FormularioTemplateDrivenComponent implements OnInit {

  usuario: User;
  constructor() { 
    this.usuario = new User();
  }

  ngOnInit() {
  }

  onSubmit(){
    alert(this.usuario.login);
    alert(this.usuario.pass);
  }

}
