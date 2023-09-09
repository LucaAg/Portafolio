import { Component, OnInit  } from '@angular/core';
import { interval } from 'rxjs';
import { fadeInOut } from '../animaciones';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss'],
  animations: [fadeInOut]
})
export class ProyectosComponent {

  indiceImagen = 0;
  indiceProyecto = 0;
  titulo = "SALA DE JUEGOS";
  spinner:boolean = false;
  spinnerProyectos:boolean = false;

  idSalaJuego:any;
  idIMA:any;
  idBianluca:any;
  idClinica:any;

  rutasImaganesSala = [
    "../../../assets/proyectos/sala-juegos/iniciar.PNG",
    "../../../assets/proyectos/sala-juegos/home.PNG",
    "../../../assets/proyectos/sala-juegos/juegos.PNG",
    "../../../assets/proyectos/sala-juegos/estadisticas.PNG",
  ]

  rutasImagenesIMA = [
    "../../../assets/proyectos/IMA/IMA-1.PNG",
    "../../../assets/proyectos/IMA/IMA-2.PNG",
    "../../../assets/proyectos/IMA/IMA-3.PNG",
    "../../../assets/proyectos/IMA/IMA-4.PNG"
  ]

  rutasImagenesBianluca = [
    "../../../assets/proyectos/Bianluca/BIANLUCA-1.jpg",
    "../../../assets/proyectos/Bianluca/BIANLUCA-2.jpg",
    "../../../assets/proyectos/Bianluca/BIANLUCA-3.jpg",
    "../../../assets/proyectos/Bianluca/BIANLUCA-4.jpg"
  ]

  rutasImagenesClinica = [
    "../../../assets/proyectos/Clinica/CLINICA-1.PNG",
    "../../../assets/proyectos/Clinica/CLINICA-2.PNG",
    "../../../assets/proyectos/Clinica/CLINICA-3.PNG",
    "../../../assets/proyectos/Clinica/CLINICA-4.PNG",
  ]

  constructor()
  {
    this.activarSpinner();
  }

  ngAfterViewInit()
  {
    this.idSalaJuego = document.getElementById('0');
    this.idIMA = document.getElementById('1');
    this.idBianluca = document.getElementById('2');
    this.idClinica = document.getElementById('3');
  }
  

  ngOnInit() {
    interval(3000).subscribe(() => {
      switch(this.indiceProyecto)
      {
        case 0:
          this.titulo = "SALA DE JUEGOS";
          this.cambiarImageDinamicamente(this.rutasImaganesSala);
          this.idSalaJuego.classList.remove('ocultar');
          this.idIMA.classList.add('ocultar');
          this.idBianluca.classList.add('ocultar');
          this.idClinica.classList.add('ocultar');
          break;
        case 1:
          this.titulo = "IMA";
          this.cambiarImageDinamicamente(this.rutasImagenesIMA);
          this.idSalaJuego.classList.add('ocultar');
          this.idIMA.classList.remove('ocultar');
          this.idBianluca.classList.add('ocultar');
          this.idClinica.classList.add('ocultar');
          break;
        case 2:
          this.titulo = "Bianluca";
          this.cambiarImageDinamicamente(this.rutasImagenesBianluca);
          this.idSalaJuego.classList.add('ocultar');
          this.idIMA.classList.add('ocultar');
          this.idBianluca.classList.remove('ocultar');
          this.idClinica.classList.add('ocultar');
          break;
        case 3:
          this.titulo = "Clínica Online";
          this.cambiarImageDinamicamente(this.rutasImagenesBianluca);
          this.idSalaJuego.classList.add('ocultar');
          this.idIMA.classList.add('ocultar');
          this.idBianluca.classList.add('ocultar');
          this.idClinica.classList.remove('ocultar');
          break;
      }
    });
  }

  activarSpinner()
  {
    this.spinner = true;
    setTimeout(()=>{
      this.spinner = false;
    },2000);
  }

  activarSpinnerProyectos()
  {
    this.spinnerProyectos = true;
    setTimeout(()=>{
      this.spinnerProyectos = false;
    },2000);
  }

  cambiarImageDinamicamente(ruta:any)
  {
    this.indiceImagen = (this.indiceImagen + 1) % ruta.length;
  }

  cambiarVistaProyecto(direccion:string)
  {
    this.activarSpinnerProyectos();
    if(direccion == 'izq')
    {
      if(this.indiceProyecto == 0)
      {
        this.indiceProyecto = 3;
      }
      else
      {
        this.indiceProyecto--;
      }
    }
    else
    {
      if(this.indiceProyecto == 3)
      {
        this.indiceProyecto = 0;
      }
      else
      {
        this.indiceProyecto++;
      }
    }
  }

  descargarPDF()
  {
    let nombreArchivo = 'Agnoli-Luca-Nahuel-IMA';
    let url = '../../../assets/proyectos/IMA/Agnoli.Luca.2A.RecuTP4 .pdf';
    const link = document.createElement('a');
    link.href= url;
    link.target = '_blank';
    link.download = nombreArchivo;
    link.click();
  }
}
