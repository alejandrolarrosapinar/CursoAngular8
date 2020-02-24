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
    PalabrasComponent
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
