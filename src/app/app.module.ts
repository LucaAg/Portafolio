import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';
import { ErrorComponent } from './paginas/error/error.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { BienvenidaComponent } from './paginas/bienvenida/bienvenida.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerComponent } from './componentes/spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    ErrorComponent,
    NavBarComponent,
    BienvenidaComponent,
    ContactoComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
