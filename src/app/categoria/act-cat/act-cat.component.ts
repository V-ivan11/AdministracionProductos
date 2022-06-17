import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/Modelo/categoria';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/servicios/categoria.service';

@Component({
  selector: 'app-act-cat',
  templateUrl: './act-cat.component.html',
  styleUrls: ['./act-cat.component.css']
})

export class ActCatComponent implements OnInit {

  titulo:String = "Actualizar Categoría"
  categoria:Categoria = new Categoria();
  newCategoria:Categoria = new Categoria();
  idCat:any = 0;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private servicio: CategoriaService) { }


  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {this.idCat = data});
    this.servicio.leerCategoria(this.idCat).subscribe((categoria) => this.categoria = categoria);
  }

  actualizarCategoria(){

  }

}
