import { Component, OnInit } from '@angular/core';
import { Producto } from '../Modelo/producto';
import Swal from 'sweetalert2';
import { Categoria } from '../Modelo/categoria';
import { CategoriaService } from 'src/app/servicios/categoria.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto:Producto = new Producto();
  listaCategorias:Categoria[] = [];

  titulo: string = 'Producto';


  constructor(private servicio:CategoriaService) { }

  ngOnInit(): void {
    this.servicio.listadoCategorias().subscribe((categorias)=>this.listaCategorias=categorias);
  }

  almacenarProducto() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se almacenó la categoría',
      showConfirmButton: false,
      timer: 1500
    });
  }

}
