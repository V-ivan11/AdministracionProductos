import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Categoria } from '../Modelo/categoria';
import { CategoriaService } from '../servicios/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  constructor(private servicio: CategoriaService) { }

  categoria:Categoria = new Categoria();
  titulo: string = 'Registrar una Categoría';
  
  ngOnInit(): void {
  }

  almacenarCategoria() {
    this.servicio.crearCategoria(this.categoria).subscribe(data => console.log(data), error => console.log(error));
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se almacenó el producto',
      showConfirmButton: false,
      timer: 1500
    });
  }

}
