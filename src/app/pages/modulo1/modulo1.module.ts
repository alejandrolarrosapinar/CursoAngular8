import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Componente1Component } from './componente1/componente1.component';
import { RouterModule } from '@angular/router';
import { Componente2Component } from './componente2/componente2.component';



@NgModule({
  declarations: [Componente1Component, Componente2Component],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'uno', component: Componente1Component},
      {path: 'dos', component: Componente2Component},
      {path: '' , redirectTo: 'uno', pathMatch: 'full'}
    ]
    )
  ]
})
export class Modulo1Module { }
