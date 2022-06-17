import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelo/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-p',
  templateUrl: './listado-p.component.html',
  styleUrls: ['./listado-p.component.css']
})
export class ListadoPComponent implements OnInit {

  titulo:string = 'Listado de Productos';
  listaProductos:Producto[] = [];

  constructor(private servicio:ProductoService) { }

  ngOnInit(): void {
    this.servicio.listadoProducto().subscribe((productos)=>this.listaProductos=productos);
  }

  eliminar(producto:Producto):void {
    Swal.fire({
      title: 'Eliminar Producto',
      text: `¿Estas completamente seguro de eliminar el producto? ${producto.nombreProducto}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, estoy seguro',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicio.eliminarProducto(producto.idProducto).subscribe(
          (respuesta)=>{
            this.servicio.listadoProducto().subscribe(
              (productos)=> this.listaProductos = productos
            )
          }
        )
        Swal.fire(
          'Borrado!',
          'El producto se ha borrado',
          'success'
        )
      }
    })
  }

}
