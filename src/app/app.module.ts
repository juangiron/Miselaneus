import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './componets/ng-style/ng-style.component';
import { CssComponent } from './componets/css/css.component';
import { ClasessComponent } from './componets/clasess/clasess.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { NgSwitchComponent } from './componets/ng-switch/ng-switch.component';
import { HomeComponent } from './componets/home/home.component';
import { APP_ROUTING } from './app.routes';
import { UsuarioComponent } from './componets/usuario/usuario.component';
import { UsuarioNuevoComponent } from './componets/usuario/usuario-nuevo.component';
import { UsuarioEditarComponent } from './componets/usuario/usuario-editar.component';
import { UsuarioDetalleComponent } from './componets/usuario/usuario-detalle.component';
import { NavbarComponent } from './componets/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    ClasessComponent,
    ResaltadoDirective,
    NgSwitchComponent,
    HomeComponent,
    UsuarioComponent,
    UsuarioNuevoComponent,
    UsuarioEditarComponent,
    UsuarioDetalleComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
