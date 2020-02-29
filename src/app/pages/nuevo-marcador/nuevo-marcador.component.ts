import { Component, OnInit } from '@angular/core';
import { ComunicaNuevoMarcadorService } from 'src/app/services/comunica-nuevo-marcador.service';

@Component({
  selector: 'app-nuevo-marcador',
  templateUrl: './nuevo-marcador.component.html',
  styleUrls: ['./nuevo-marcador.component.css']
})
export class NuevoMarcadorComponent implements OnInit {

  marcador: number;

  constructor(private miservicio : ComunicaNuevoMarcadorService) { 
    this.marcador= 0;
    //alert(miservicio);
  }

  ngOnInit() {
    //alert(this.miservicio);
    //alert(this.miservicio.marcador$);
    this.miservicio.marcador$.subscribe(correct=>{
      this.marcador = correct;
    });
  }

}
