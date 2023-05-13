import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductComponent } from './pages/product/product.component';
import { CategoryComponent } from './pages/category/category.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotfoundModule } from './notfount/notfound.module';
import { Error404Component } from './notfount/error404/error404.component';

const routes: Routes = [
  //pages
  {path:"dashboard", component:DashboardComponent},
  {path:"product", component:ProductComponent},
  {path:"category", component:CategoryComponent},
  //auth
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  //notfound
  {path:"**", component:NotfoundModule},

];
@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
