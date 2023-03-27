import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { LaEmpresaComponent } from './pages/la-empresa/la-empresa.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

const routes: Routes = [
  {path:"servicios", component:ServiciosComponent},
  {path:"productos", component:ProductosComponent},
  {path:"la-empresa", component:LaEmpresaComponent},
  {path:"contacto", component:ContactoComponent},
  {path:"", component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
