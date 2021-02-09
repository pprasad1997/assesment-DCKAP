import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import { Product } from "../product/product.model";

@Injectable({providedIn: 'root'})

export class DataStorageService {

  private DBurl = 'https://assessment-dckap-default-rtdb.firebaseio.com/product.json';

  constructor(private http: HttpClient, private router: Router) {}

  addProduct(product: Product){
    this.http.post(this.DBurl, product)
      .subscribe( (response) => {
        // console.log(response);
        this.router.navigate(['./viewProduct']);
      }, error => {
        console.log(error);
      });
  }

  fetchProduct(){
    return this.http.get<Product[]>(this.DBurl);

  }
}
