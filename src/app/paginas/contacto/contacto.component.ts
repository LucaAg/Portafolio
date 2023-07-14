import { Component } from '@angular/core';
import { deslizarIzqADerAnimacion } from '../animaciones';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
  animations: [deslizarIzqADerAnimacion]
})
export class ContactoComponent {
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
}
