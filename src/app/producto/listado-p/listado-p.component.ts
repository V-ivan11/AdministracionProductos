import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelo/producto';
import { ProductoService } from 'src/app/servicios/producto.service';

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
    this.servicio.listadoCategorias().subscribe((productos)=>this.listaProductos=productos);
  }

}
