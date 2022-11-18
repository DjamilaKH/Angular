import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { FormProductComponent } from './components/form-product/form-product.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
    FormProductComponent
  ],
  imports: [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
