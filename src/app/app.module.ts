import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { ImgHomeComponent } from './components/img-home/img-home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { HeaderPageComponent } from './components/header-page/header-page.component';
import { ArticuloServiciosComponent } from './components/articulo-servicios/articulo-servicios.component';
import { SectionBgWhiteComponent } from './components/section-bg-white/section-bg-white.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { DeslizarProductoComponent } from './components/deslizar-producto/deslizar-producto.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { LaEmpresaComponent } from './pages/la-empresa/la-empresa.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ImgHomeComponent,
    ServiciosComponent,
    HeaderPageComponent,
    ArticuloServiciosComponent,
    SectionBgWhiteComponent,
    ProductosComponent,
    DeslizarProductoComponent,
    CarruselComponent,
    LaEmpresaComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
