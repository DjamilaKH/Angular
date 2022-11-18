import { FormProductComponent } from './components/form-product/form-product.component';
import { ProductsComponent } from './components/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'list', component: ProductsComponent },
  { path: 'newp', component: FormProductComponent }
];

//  { path: '**', component: PageNotFoundComponent },

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}