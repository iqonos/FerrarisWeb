import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IProducto, Productos } from 'src/app/models/productos.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-deslizar-producto',
  templateUrl: './deslizar-producto.component.html',
  styleUrls: ['./deslizar-producto.component.scss']
})
export class DeslizarProductoComponent implements OnInit {
  @Input() isActive:number | null = null;

  isActiveBool:boolean = false;
  
  @Input() title:string = '';
  @Input() productos:IProducto[] = [];
  @Input() listaCarrusel:string[] = [];
  
  constructor(private prodService:ProductoService){}

  ngOnInit(): void {
    this.prodService.productoSeleccionado.subscribe(res=>{
      this.isActive = res;
    })
  }

  ActiveItem(){
    if(this.isActive != this.productos[0].enum){
      this.prodService.productoSeleccionado.emit(this.productos[0].enum);
    }else{
      this.prodService.productoSeleccionado.emit(null);
    }
  }

}
