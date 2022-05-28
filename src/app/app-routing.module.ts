import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ListadoComponent } from './categoria/listado/listado.component';
import { ListadoPComponent } from './producto/listado-p/listado-p.component';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [
  {path:'categoria', component:CategoriaComponent},
  {path:'listadoCategorias', component:ListadoComponent},
  {path:'producto', component:ProductoComponent},
  {path:'listadoProductos', component:ListadoPComponent},
  {path: 'home', component:BienvenidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
