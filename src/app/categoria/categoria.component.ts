import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Categoria } from '../Modelo/categoria';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  constructor() { }

  categoria:Categoria = new Categoria;

  titulo: string = 'Categorías';

  ngOnInit(): void {
  }

  almacenarCategoria() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se almacenó la categoría',
      showConfirmButton: false,
      timer: 1500
    });
  }

  

}
