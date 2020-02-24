import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';

// Para indicar que es un componente
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
  // Al igual que en el modulo principal tenemos los providers también los podemos tener en
  // el propio componente: si lo usamos aquí sólo este componente puede usar el servicio,
  // si lo usamos en el módulo cualquier componente que esté asociado al módulo podrá utilizarlo.
  providers: [

  ]
})
export class CategoriasComponent implements OnInit {

  numero: number;
  cadena: string;
  cadena2: string;

  categorias:any;

  constructor(private service: CategoriasService) {
    // aquí se establecen el valor de las variables.
    //this.numero = 345;
    //this.cadena = 'Cadena';
    //this.cadena2 = `${this.numero + 34}`;
    //alert(service.obtenerDatos());
    
  }

  ngOnInit() {
    // cuando la página web se carga.
    // primero se va a ejecutar el constructor.
    // cada vez que se accede a este componente se va a ejecutar
    // lo mas normal es cualquier llamada a un servidor aquí
    // también existe el afterviewinit para cuando la vista se ha cargado
    // en el navegador.
    //alert('leyendo datos del fichero json');
    this.service.getConfig().subscribe(
      (response)=>{
          console.log(response);
          var jsonParseado =JSON.stringify(response);
          this.categorias = JSON.parse(jsonParseado).data;
          //console.log(this.categorias[0].palabras[0]["name"]);
      },(error)=>{
        console.log(error);
      }
          );
  }

 

}
