import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-palabras',
  templateUrl: './palabras.component.html',
  styleUrls: ['./palabras.component.css']
})
export class PalabrasComponent implements OnInit {

  @Input() name: string;
  constructor() { }

  ngOnInit() {
  }

}
