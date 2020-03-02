import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import {HttpClientModule} from '@angular/common/http';
import { ComponenteClienteHttpComponent } from './pages/componente-cliente-http/componente-cliente-http.component';
import { PageNotFoundComponentComponent } from './pages/page-not-found-component/page-not-found-component.component';
import { PadreHijoComponent } from './pages/padre-hijo/padre-hijo.component';
import { PadreComponent } from './pages/padre/padre.component';
import { HijoComponent } from './pages/hijo/hijo.component';
import { HijoPadreComponent } from './pages/hijo-padre/hijo-padre.component';
import { PalabrasComponent } from './pages/palabras/palabras.component';
import { MarcadorComponent } from './pages/marcador/marcador.component';
import { ModificarMarcadorComponent } from './pages/modificar-marcador/modificar-marcador.component';
import { NuevoMarcadorComponent } from './pages/nuevo-marcador/nuevo-marcador.component';
import { EditarNuevoMarcadorComponent } from './pages/editar-nuevo-marcador/editar-nuevo-marcador.component';
import { PadreRouterOutletComponent } from './pages/padre-router-outlet/padre-router-outlet.component';
import { Hijo1RouterOutletComponent } from './pages/hijo1-router-outlet/hijo1-router-outlet.component';
import { Hijo2RouterOutletComponent } from './pages/hijo2-router-outlet/hijo2-router-outlet.component';

@NgModule({
  declarations: [
    // Aquí se definen todos los componentes que vamos a utilizar en el módulo.
    AppComponent,
    CategoriasComponent,
    ComponenteClienteHttpComponent,
    PageNotFoundComponentComponent,
    PadreHijoComponent,
    PadreComponent,
    HijoComponent,
    HijoPadreComponent,
    PalabrasComponent,
    MarcadorComponent,
    ModificarMarcadorComponent,
    NuevoMarcadorComponent,
    EditarNuevoMarcadorComponent,
    PadreRouterOutletComponent,
    Hijo1RouterOutletComponent,
    Hijo2RouterOutletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  // Componente principal de la aplicación
  bootstrap: [AppComponent]
})
export class AppModule { }
