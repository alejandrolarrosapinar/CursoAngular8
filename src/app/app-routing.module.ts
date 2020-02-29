import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteClienteHttpComponent } from './pages/componente-cliente-http/componente-cliente-http.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { PageNotFoundComponentComponent } from './pages/page-not-found-component/page-not-found-component.component';
import { PadreHijoComponent } from './pages/padre-hijo/padre-hijo.component';
import { HijoPadreComponent } from './pages/hijo-padre/hijo-padre.component';
import { MarcadorComponent } from './pages/marcador/marcador.component';
import { NuevoMarcadorComponent } from './pages/nuevo-marcador/nuevo-marcador.component';



const routes: Routes = [
  {
    path: 'info', component: ComponenteClienteHttpComponent,
  }, {
    path: 'categorias', component: CategoriasComponent
  },
  {
    path: 'padreHijo', component: PadreHijoComponent
  },
  {
    path: 'hijoPadre', component: HijoPadreComponent
  },
  {
    path: 'marcador', component: MarcadorComponent
  },
  {
    path: 'nuevoMarcador', component: NuevoMarcadorComponent
  },
  {
    path: '', redirectTo: '/categorias' , pathMatch: 'full'
  },
  {
    path: '**', component: PageNotFoundComponentComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
