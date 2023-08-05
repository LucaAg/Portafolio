import { Component } from '@angular/core';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss']
})
export class BienvenidaComponent {
  spinner:boolean = false;
  frames:any;
  lenguajes:any;
  mensajeEstandar:any;
  baseDatos:any;
  otros:any;
  estilos:any;
  constructor()
  {
    this.activarSpinner();
  }

  ngOnInit()
  {
    this.frames = document.getElementById('frameworks');
    this.mensajeEstandar = document.getElementById('no-data');
    this.lenguajes = document.getElementById('lenguajes');
    this.baseDatos = document.getElementById('base-datos');
    this.otros = document.getElementById('otros');
    this.estilos = document.getElementById('estilos');
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
    let nombreArchivo = 'Agnoli-Luca-Nahuel-CV-Programador-FullStack.pdf';
    let url = '../../../assets/LucaAgnoli CV.pdf';
    const link = document.createElement('a');
    link.href= url;
    link.target = '_blank';
    link.download = nombreArchivo;
    link.click();
  }

  onEntraMouse(datosAMostrar:string)
  {
    this.mensajeEstandar.classList.add("esconder");
    switch(datosAMostrar)
    {
      case "frames":
        this.frames.classList.remove("esconder");
        break;
      case "lenguajes":
        this.lenguajes.classList.remove("esconder");
        break;
      case "otros":
        this.otros.classList.remove("esconder");
        break;
      case "base-datos":
        this.baseDatos.classList.remove("esconder");
        break;
      case "estilos":
        this.estilos.classList.remove("esconder");
        break;        
    }
  }

  onSaleMouse(datoAEsconder:string)
  {
    switch(datoAEsconder)
    {
      case "frames":
        this.frames.classList.add("esconder");
        break;
      case "lenguajes":
        this.lenguajes.classList.add("esconder");
        break;
      case "otros":
        this.otros.classList.add("esconder");
        break;
      case "base-datos":
        this.baseDatos.classList.add("esconder");
        break;
      case "estilos":
        this.estilos.classList.add("esconder");
        break;        
    }
    this.mensajeEstandar.classList.remove("esconder");
  }
}
