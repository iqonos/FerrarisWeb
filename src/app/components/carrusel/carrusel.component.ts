import { I18nPluralPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent implements OnInit{
  
  @Input() id!:number;
  @Input() imagenes:string[] = [];
  idFinal:string = this.generarStringAleatorio();

  ngOnInit(): void {
    console.log(this.id, this.idFinal)
    this.idFinal = 'elemento'+this.id;
  }

  generarStringAleatorio(): string {
    let resultado = '';
    const longitud = 25;
    const caracteresPermitidos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (let i = 0; i < longitud; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
      const caracterAleatorio = caracteresPermitidos.charAt(indiceAleatorio);
      resultado += caracterAleatorio;
    }
  
    return resultado;
  }
}
