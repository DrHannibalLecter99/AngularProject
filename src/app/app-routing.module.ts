import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"",redirectTo:"Home",pathMatch:"full"}
  ,{path:"Home",loadChildren: () => import('./home/home.module').then(m=>m.HomeModule)}
  ,{path:"Products", loadChildren:()=> import('./products/products.module').then(m=>m.ProductsModule)}
  ,{path:"AboutUs",loadChildren:() => import('./about-us/about-us.module').then(m=>m.AboutUsModule)}
  ,{path:"ContactUs",loadChildren:() => import('./contact-us/contact-us.module').then(m=>m.ContactUsModule)}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
