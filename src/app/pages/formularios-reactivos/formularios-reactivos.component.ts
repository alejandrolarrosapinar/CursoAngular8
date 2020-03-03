import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-formularios-reactivos',
  templateUrl: './formularios-reactivos.component.html',
  styleUrls: ['./formularios-reactivos.component.css']
})
export class FormulariosReactivosComponent implements OnInit {

  formulario = new FormGroup({
    firstName : new FormControl(''),
    lastName  : new FormControl('')
  });
  constructor() { 
    
  }

  ngOnInit() {
  }

  submitEjemplo(){
    alert('Usuario: '+this.formulario.controls.firstName.value+'\nContraseña:'+this.formulario.controls.lastName.value);

  }

}
