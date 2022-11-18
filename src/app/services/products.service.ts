import { URL } from './../../../Data/url';
import { PRODUCTS } from './../../../Data/productsData';
import { Product } from './../model/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // url: string = "http://localhost:8000/products";

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    // let p = of(PRODUCTS);
    // return p;

    return this.http.get<Product[]>(URL + "/products");

  }
}
