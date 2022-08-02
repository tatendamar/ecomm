import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/home/products/products.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products/:name', component: ProductsComponent },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  providers: [
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
