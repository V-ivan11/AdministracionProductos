import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/Modelo/categoria';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  titulo: string = 'Listado de Categorias';
  listaCategorias: Categoria[] = [];

  constructor(private servicio: CategoriaService) { }

  ngOnInit(): void {
    this.servicio.listadoCategorias().subscribe((categorias) => this.listaCategorias = categorias);
  }

  eliminar(categoria:Categoria):void {
    Swal.fire({
      title: 'Eliminar Categoria',
      text: `¿Estas completamente seguro de eliminar la catregoria? ${categoria.nombreCategoria}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, estoy seguro',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicio.eliminarCategoria(categoria.idCategoria).subscribe(
          (respuesta)=>{
            this.servicio.listadoCategorias().subscribe(
              (categorias)=> this.listaCategorias = categorias
            )
          }
        )
        Swal.fire(
          'Borrado!',
          'La categoria se ha borrado',
          'success'
        )
      }
    })
  }

}
