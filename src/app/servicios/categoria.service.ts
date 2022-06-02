import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Categoria } from '../Modelo/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private urlEndPoint: string = 'http://localhost:8899/apiCategorias/categoria';

  constructor(private http: HttpClient) { }

  private httpHeaders = new HttpHeaders({ 'ContentType': 'application/json' });

  listadoCategorias(): Observable<Categoria[]> {
    return this.http.get(this.urlEndPoint).pipe(map((response => response as Categoria[])));
  }

  eliminarCategoria(id: number):Observable<Categoria>{
    return this.http.delete<Categoria>(
    `${this.urlEndPoint}/${id}`, {headers: this.httpHeaders}
    );
  }

  leerCategoria(id: number):Observable<Categoria>{
    return this.http.get<Categoria>(
      `${this.urlEndPoint}/${id}`, {headers: this.httpHeaders}
      );
  }

  crearCategoria(categoria: Categoria):Observable<Categoria>{
    return this.http.post<Categoria>(this.urlEndPoint, categoria, {headers: this.httpHeaders});
  }

  actualizarCategoria(categoria: Categoria):Observable<Categoria>{
    return this.http.put<Categoria>(
      `${this.urlEndPoint}/${categoria.idCategoria}`, categoria, {headers: this.httpHeaders});
  }
}
