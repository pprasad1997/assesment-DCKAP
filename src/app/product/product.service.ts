import { Injectable } from "@angular/core";

import { Product } from "./product.model";
import { DataStorageService } from "../shared/data-storage.service";

@Injectable({providedIn: 'root'})

export class ProductService {
  products: Product[] = [];

  constructor( private dataService: DataStorageService) {}

  getProducts(){
    return this.products;
  }

  setProduct(products:Product[]){
    this.products = products;
  }
  addProduct(name:string, price:number, color:string, description:string, status:string, imgpath:string | ArrayBuffer){
    const newProduct = new Product(name, price, color, description, imgpath, status    )
    this.dataService.addProduct(newProduct);
  }

}
