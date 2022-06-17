import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Producto } from '../Modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlEndPoint: string = 'http://localhost:8899/apiProductos/producto';

  constructor(private http: HttpClient) { }

  private httpHeaders = new HttpHeaders({ 'ContentType': 'application/json' });

  listadoProducto(): Observable<Producto[]> {
    return this.http.get(this.urlEndPoint).pipe(map((response => response as Producto[])));
  }

  eliminarProducto(id: number):Observable<Producto>{
    return this.http.delete<Producto>(
    `${this.urlEndPoint}/${id}`, {headers: this.httpHeaders}
    );
  }

  crearProducto(producto: Producto):Observable<Producto>{
    return this.http.post<Producto>(this.urlEndPoint, producto, {headers: this.httpHeaders});
  }
}
