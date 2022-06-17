import { Component, OnInit } from '@angular/core';
import { Producto } from '../Modelo/producto';
import Swal from 'sweetalert2';
import { Categoria } from '../Modelo/categoria';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { ProductoService } from '../servicios/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductoComponent implements OnInit {

  producto:Producto = new Producto();
  listaCategorias:Categoria[] = [];
  idCatSel:number = 0;
  catElegida:Categoria = new Categoria();
  titulo: string = 'Producto';

  constructor(private servicioCat:CategoriaService, private servicioProd:ProductoService) { }

  ngOnInit(): void {
    this.servicioCat.listadoCategorias().subscribe((categorias)=>this.listaCategorias=categorias);
  }

  almacenarProducto() {
    for (let i = 0; i < this.listaCategorias.length; i++) {
      if (this.listaCategorias[i].idCategoria = this.idCatSel) {
        this.catElegida = this.listaCategorias[i];
        break;
      }
    }
    this.producto.idCategoria = this.catElegida;
    this.servicioProd.crearProducto(this.producto).subscribe(data => console.log(data), error => console.log(error));
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se almacenó la categoría',
      showConfirmButton: false,
      timer: 1500
    });
  }
}
