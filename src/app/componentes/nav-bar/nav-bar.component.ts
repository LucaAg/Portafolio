import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  menu:any;
  navbar:any;

  ngAfterViewInit()
  {
    this.menu = document.getElementById('icono-menu');
    this.navbar = document.querySelector('.navbar');
  }

  agruparMenu()
  {
    this.menu.classList.toggle('bx-x');
    this.navbar.classList.toggle('open');
  }
}
