import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  imgPath: string | ArrayBuffer;
  checked = 'active';
  btnName = 'Submit';
  colors = ['green', 'white', 'blue'];
  constructor(
    private productService: ProductService) { }

  ngOnInit(): void {
  }

  upload(event){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.imgPath = event.target.result;
      }

  }

  onSubmit(form: NgForm){
    console.log(form);
    const name:string = form.value.name;
    const price:number = form.value.price;
    const color:string = form.value.color;
    const description:string = form.value.description;
    const status:string = form.value.status;
    const imgpath:string | ArrayBuffer = this.imgPath;

    this.productService.addProduct(name, price, color, description, status, imgpath);
    form.reset();
    this.btnName = 'Loading';

  }

}
