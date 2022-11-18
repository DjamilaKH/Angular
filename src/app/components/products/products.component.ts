import { ProductsService } from './../../services/products.service';
import { PRODUCTS } from './../../../../Data/productsData';
import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList!: Product[];
  priceMax!: number;


  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    // this.productList= PRODUCTS;
    this.productsService.getProducts().subscribe((res) =>{
      console.log(res);
      this.productList = res;
    })

  }
  
  buyProduct(i: number){
    this.productList[i].quantity--;


  }
  addLike(j: number){
    this.productList[j].like++;


  }

}
