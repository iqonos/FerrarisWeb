import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-articulo-servicios',
  templateUrl: './articulo-servicios.component.html',
  styleUrls: ['./articulo-servicios.component.scss']
})
export class ArticuloServiciosComponent {

  @Input() reverse:boolean = false;
  @Input() img:string = "";
  @Input() title:string = "";
  @Input() text:string = "";

}
