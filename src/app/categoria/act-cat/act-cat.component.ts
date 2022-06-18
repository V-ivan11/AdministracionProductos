import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/Modelo/categoria';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-act-cat',
  templateUrl: './act-cat.component.html',
  styleUrls: ['./act-cat.component.css']
})

export class ActCatComponent implements OnInit {

  titulo:String = "Actualizar Categoría"
  categoria:Categoria = new Categoria();
  idCat:any = 0;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private servicio: CategoriaService) { }


  ngOnInit(): void {
    this.idCat = this.activatedRoute.snapshot.paramMap.get('id');
    this.categoria.idCategoria = this.idCat;
    this.servicio.leerCategoria(this.idCat).subscribe((categoria) => this.categoria = categoria);
  }

  actualizarCategoria(){
    this.servicio.actualizarCategoria(this.categoria).subscribe(data => console.log(data), error => console.log(error));
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se actualizó la categoría',
      showConfirmButton: false,
      timer: 1500
    });
  }

}
