import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/Modelo/categoria';
import { Producto } from 'src/app/Modelo/producto';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { ProductoService } from 'src/app/servicios/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-act-prod',
  templateUrl: './act-prod.component.html',
  styleUrls: ['./act-prod.component.css']
})
export class ActProdComponent implements OnInit {

  titulo:String = "Actualizar Producto"
  producto:Producto = new Producto();
  idProducto:any = 0;
  idCatSel:number = 0;
  listaCategorias:Categoria[] = [];

  constructor(private servicioCat:CategoriaService,
    private activatedRoute: ActivatedRoute,
    private servicioProd:ProductoService) { }

  ngOnInit(): void {
    // Obtiene un listado de las categorías para mostrar en el combo
    this.servicioCat.listadoCategorias().subscribe((categorias)=>this.listaCategorias=categorias);
    // Obtiene el ID que se pasó por la URL
    this.idProducto = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.idProducto);
    // Lee los datos del producto seleccionado
    this.servicioProd.leerProducto(this.idProducto).subscribe((producto) => this.producto = producto);
  }

  actualizarProducto(){

    for (let i = 0; i < this.listaCategorias.length; i++) {
      if (this.listaCategorias[i].idCategoria = this.idCatSel) {
        this.producto.idCategoria = this.listaCategorias[i];
        break;
      }
    }

    this.servicioProd.actualizarProducto(this.producto).subscribe(data => console.log(data), error => console.log(error));
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se almacenó la categoría',
      showConfirmButton: false,
      timer: 1500
    });
  }
}
