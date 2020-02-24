import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteClienteHttpComponent } from './pages/componente-cliente-http/componente-cliente-http.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { PageNotFoundComponentComponent } from './pages/page-not-found-component/page-not-found-component.component';


const routes: Routes = [
  {
    path: 'info', component: ComponenteClienteHttpComponent,
  }, {
    path: 'categorias', component: CategoriasComponent
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
