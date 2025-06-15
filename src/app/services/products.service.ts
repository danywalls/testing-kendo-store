import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {toSignal} from "@angular/core/rxjs-interop";

export type Product = {
  id: string;
  title: string;
  image: string;
  price: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private API = 'https://fakestoreapi.com/products'
  private http = inject(HttpClient)
  public products$ = this.http.get<Product[]>(this.API);
  public productById = (id: string) => this.http.get<Product>(`${this.API}/${id}`);
}
