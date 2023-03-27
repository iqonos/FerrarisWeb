import { Injectable , EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productoSeleccionado:EventEmitter<number | null>= new EventEmitter();

  constructor() { }
}
