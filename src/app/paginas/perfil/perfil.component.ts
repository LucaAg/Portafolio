import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { deslizarIzqADerAnimacion } from '../animaciones';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  animations: [deslizarIzqADerAnimacion]
})
export class PerfilComponent {
  miPerfil: any = null;
  spinner:boolean = false;

  constructor(private http: HttpClient){
    this.activarSpinner();
  }

  activarSpinner()
  {
    this.spinner = true;
    setTimeout(()=>{
      this.spinner = false;
    },2000);
  }

  ngOnInit(): void {
    this.http
      .get('https://api.github.com/users/LucaAg')
      .subscribe((res: any) => {
        this.miPerfil = res;
      });

  }
}
