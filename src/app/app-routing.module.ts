import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { ActCatComponent } from './categoria/act-cat/act-cat.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ListadoComponent } from './categoria/listado/listado.component';
import { ActProdComponent } from './producto/act-prod/act-prod.component';
import { ListadoPComponent } from './producto/listado-p/listado-p.component';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [
  {path:'categoria', component:CategoriaComponent},
  {path:'categoria/:id', component:ActCatComponent},
  {path:'listadoCategorias', component:ListadoComponent},
  {path:'producto', component:ProductoComponent},
  {path:'producto/:id', component:ActProdComponent},
  {path:'listadoProductos', component:ListadoPComponent},
  {path: 'home', component:BienvenidoComponent},
  {path: '',   redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
