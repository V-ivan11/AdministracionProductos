import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Categoria } from '../Modelo/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private urlEndPoint: string = 'http://localhost:8899//productosWeb/apiCategorias/categoria';


  constructor(private http: HttpClient) { }

  private httpHeaders = new HttpHeaders({ 'ContentType': 'application/json' });

  listadoCategorias(): Observable<Categoria[]> {
    return this.http.get(this.urlEndPoint).pipe(map((response => response as Categoria[])));
  }
}
