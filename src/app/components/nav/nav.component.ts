import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paginas } from '../../models/pagina.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  isOpenMenu: boolean = false;
  urlActiva: string = '';

  constructor(private route: Router) {
    route.events.subscribe((val) => {
      this.cambiarColorMenu();
    });
  }

  ngOnInit(): void {
    this.cambiarColorMenu();
  }

  openMenu() {
    this.isOpenMenu = !this.isOpenMenu;
  }

  cambiarColorMenu() {
    let urlCompleta = this.route.url.replace('/', '');

    switch (urlCompleta) {
      case '':
        this.urlActiva = Paginas.home.toString();
        break;
      case 'servicios':
        this.urlActiva = Paginas.servicios.toString();
        break;
      case 'productos':
        this.urlActiva = Paginas.productos.toString();
        break;
      case 'la-empresa':
        this.urlActiva = Paginas.empresa.toString();
        break;
      case 'contacto':
        this.urlActiva = Paginas.contacto.toString();
        break;

      default:
        break;
    }
  }
}
