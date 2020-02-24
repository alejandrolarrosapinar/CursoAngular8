import { Component, OnInit } from '@angular/core';
import { ServicioClienteHttpService } from 'src/app/services/servicio-cliente-http.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-componente-cliente-http',
  templateUrl: './componente-cliente-http.component.html',
  styleUrls: ['./componente-cliente-http.component.css'],
  //le indicamos al componente que va a hacer uso del servicio
  providers: [ServicioClienteHttpService]
})
export class ComponenteClienteHttpComponent implements OnInit {

  usuario: User;
  variable: boolean;
  urlGato: string;
  textoBoton: string;
  
  constructor(private servicioClienteHttp: ServicioClienteHttpService) {
    //alert(servicioClienteHttp);
    this.usuario = new User();
    this.variable = false;
    this.textoBoton='Mostrar';
    this.urlGato ='https://s4.eestatic.com/2018/11/28/social/Gatos-Instagram-Redes_sociales-La_Jungla_356726591_107647814_1706x960.jpg';
   }

   onClickMe(){
     this.variable=!this.variable;
     this.textoBoton= !this.variable ? 'Mostrar':'Ocultar';
   }

   empiezaPor(valor:string):boolean{

     return valor !=null && valor.toString().startsWith('http',0);
   }

  ngOnInit() {
    this.servicioClienteHttp.loadInfo().subscribe(
      (response)=>{
        this.usuario = response;
        //alert(response['login']);
        //alert(this.usuario.login);
        
      },(error) =>{
        alert('error');
      },()=>{
        //alert('ejecutamos sí o sí');
      }
    );
  }

}
