import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { NoFoundPageComponent } from '../noFoundPage/no-found-page.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  //rutas protegidas
  {path: 'dashboard', component: PagesComponent,
=======
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  //rutas protegidas
  {
    path: 'dashboard', component: PagesComponent,
>>>>>>> ce84c7ff68cf0747d9ee435a883a56686be2dbbd
    children: [
      { path: '', component: DashboardComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'categories', component: CategoriesComponent },
<<<<<<< HEAD
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  }
=======
      { path:'', redirectTo:'/dashboard', pathMatch:'full'},
    ]
  },
  //{path:'**', component: NoFoundPageComponent},
>>>>>>> ce84c7ff68cf0747d9ee435a883a56686be2dbbd
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
<<<<<<< HEAD
  exports: [
=======
  exports:[
>>>>>>> ce84c7ff68cf0747d9ee435a883a56686be2dbbd
    RouterModule
  ]
})
export class PagesRoutingModule { }
