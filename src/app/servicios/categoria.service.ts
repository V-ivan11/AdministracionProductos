import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Categoria } from '../Modelo/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private urlEndPointCat: string = 'https://newapicategorias.herokuapp.com/apiCategorias/categoria';

  constructor(private httpCat: HttpClient) { }

  private httpHeaders = new HttpHeaders({ 'ContentType': 'application/json' });

  listadoCategorias(): Observable<Categoria[]> {
    return this.httpCat.get(this.urlEndPointCat).pipe(map((response => response as Categoria[])));
  }

  eliminarCategoria(id: number):Observable<Categoria>{
    return this.httpCat.delete<Categoria>(
    `${this.urlEndPointCat}/${id}`, {headers: this.httpHeaders}
    );
  }

  leerCategoria(id: number):Observable<Categoria>{
    return this.httpCat.get<Categoria>(
      `${this.urlEndPointCat}/${id}`, {headers: this.httpHeaders}
      );
  }

  crearCategoria(categoria: Categoria):Observable<Categoria>{
    return this.httpCat.post<Categoria>(this.urlEndPointCat, categoria, {headers: this.httpHeaders});
  }

  actualizarCategoria(categoria: Categoria):Observable<Categoria>{
    return this.httpCat.put<Categoria>(
      `${this.urlEndPointCat}/${categoria.idCategoria}`, categoria, {headers: this.httpHeaders});
  }
}
