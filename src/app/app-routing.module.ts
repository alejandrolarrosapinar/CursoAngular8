import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteClienteHttpComponent } from './pages/componente-cliente-http/componente-cliente-http.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { PageNotFoundComponentComponent } from './pages/page-not-found-component/page-not-found-component.component';
import { PadreHijoComponent } from './pages/padre-hijo/padre-hijo.component';
import { HijoPadreComponent } from './pages/hijo-padre/hijo-padre.component';
import { MarcadorComponent } from './pages/marcador/marcador.component';
import { NuevoMarcadorComponent } from './pages/nuevo-marcador/nuevo-marcador.component';
import { Modulo1Module } from './pages/modulo1/modulo1.module';
import { PadreRouterOutletComponent } from './pages/padre-router-outlet/padre-router-outlet.component';
import { Hijo2RouterOutletComponent } from './pages/hijo2-router-outlet/hijo2-router-outlet.component';
import { Hijo1RouterOutletComponent } from './pages/hijo1-router-outlet/hijo1-router-outlet.component';
import { AuthGuardService } from './services/auth-guard.service';



const routes: Routes = [
  {path: 'info', component: ComponenteClienteHttpComponent},
  {path: 'categorias', component: CategoriasComponent, canActivate: [ AuthGuardService]},
  {path: 'padreHijo', component: PadreHijoComponent},
  {path: 'hijoPadre', component: HijoPadreComponent},
  {path: 'marcador', component: MarcadorComponent},
  {path: 'nuevoMarcador', component: NuevoMarcadorComponent},
  {path: 'modulo1', loadChildren: './pages/modulo1/modulo1.module#Modulo1Module'},
  {path: 'padre-router', component: PadreRouterOutletComponent,
    children: [{path: 'hijo1-router', component: Hijo1RouterOutletComponent},
               {path: 'hijo2-router', component: Hijo2RouterOutletComponent}
              ]},
  {path: '', redirectTo: '/categorias' , pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
