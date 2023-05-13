import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages-routing.module';
<<<<<<< HEAD
import { AuthRoutingModule } from './auth/auth-routing.module';

import { NoFoundPageComponent } from './noFoundPage/no-found-page.component';
=======

import { NoFoundPageComponent } from './noFoundPage/no-found-page.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
>>>>>>> ce84c7ff68cf0747d9ee435a883a56686be2dbbd

const routes:Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'**', component: NoFoundPageComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
