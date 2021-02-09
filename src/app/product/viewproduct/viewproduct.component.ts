import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';

import { Product } from "../product.model";

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  products: Product[] = [];
  constructor( private dataService: DataStorageService) { }

  ngOnInit(): void {

   this.dataService.fetchProduct()
    .subscribe(
      (products => {
        console.log(products);

        if(products){ //if no products are stored then empty array so that condition on .html satisfies
          this.products = Object.keys(products).map((key) => { return products[key] });
        } else {
          this.products = [];
        }
      })
    );
  }
}
