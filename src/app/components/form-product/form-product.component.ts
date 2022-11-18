import { PRODUCTS } from './../../../../Data/productsData';
import { Product } from './../../model/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

 
  public product: Product;

  constructor() { }

  ngOnInit(): void {
    this.product = new Product();

  }
  save(){
    //data
    this.product.like=0;
    // this.product.id = PRODUCTS.length + 1;
    console.log(this.product);
    // PRODUCTS.push(this.product);
    //insert

  }

}
