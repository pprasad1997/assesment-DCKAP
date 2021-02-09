import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { AddComponent } from './product/add/add.component';
import { ViewproductComponent } from './product/viewproduct/viewproduct.component';

const routes: Routes = [
  { path: '', component: AddComponent},
  { path: 'viewProduct', component: ViewproductComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    AddComponent,
    ViewproductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
