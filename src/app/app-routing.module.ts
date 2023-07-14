import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './paginas/error/error.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';
import { BienvenidaComponent } from './paginas/bienvenida/bienvenida.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';

const routes: Routes = [
  {path: "", redirectTo: '/bienvenida', pathMatch: 'full'},
  {path: "perfil", component: PerfilComponent},
  {path: "bienvenida", component: BienvenidaComponent},
  {path: "contacto", component: ContactoComponent},
  {path: "**", component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
