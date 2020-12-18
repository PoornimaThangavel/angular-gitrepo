import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path : 'home' , component:HomeComponent},
  {path: 'about' , component:AboutComponent},
  {path: 'products' , component:ProductsComponent},
  {path: 'services' ,component:ServicesComponent},
  {path:'' ,redirectTo:'/home' , pathMatch:'full'},
  {path:'**' , component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
