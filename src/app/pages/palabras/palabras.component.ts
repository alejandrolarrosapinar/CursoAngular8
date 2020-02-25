import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-palabras',
  templateUrl: './palabras.component.html',
  styleUrls: ['./palabras.component.css']
})
export class PalabrasComponent implements OnInit, OnChanges {

  ngOnChanges(change: SimpleChanges) {
    console.log(`se modifica el valor de la variable con el valor -> '${this.name}'`);
  }

  @Input() name: string;
  @Input() categoriaName: string;
  constructor() { }

  ngOnInit() {
  }



}
