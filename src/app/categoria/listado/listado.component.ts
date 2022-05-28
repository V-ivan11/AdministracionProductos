import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/Modelo/categoria';
import { CategoriaService } from 'src/app/servicios/categoria.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  titulo:string = 'Listado de Categorias';
  listaCategorias:Categoria[] = [];

  constructor(private servicio:CategoriaService) { }

  ngOnInit(): void {
    this.servicio.listadoCategorias().subscribe((categorias)=>this.listaCategorias=categorias);
  }

}
