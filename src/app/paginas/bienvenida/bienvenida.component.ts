import { Component } from '@angular/core';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss']
})
export class BienvenidaComponent {
  spinner:boolean = false;

  constructor()
  {
    this.activarSpinner();
  }

  activarSpinner()
  {
    this.spinner = true;
    setTimeout(()=>{
      this.spinner = false;
    },2000);
  }

  descargarCV()
  {
    console.log("Descargar CV");
  }
}
