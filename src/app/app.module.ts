import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { HeaderComponent } from './header/header.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductoComponent } from './producto/producto.component';
import { ListadoComponent } from './categoria/listado/listado.component';
import { ListadoPComponent } from './producto/listado-p/listado-p.component';
import { ActCatComponent } from './categoria/act-cat/act-cat.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    HeaderComponent,
    BienvenidoComponent,
    FooterComponent,
    ProductoComponent,
    ListadoComponent,
    ListadoPComponent,
    ActCatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
