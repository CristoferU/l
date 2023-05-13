import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes:Routes = [
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
<<<<<<< HEAD
  exports:[RouterModule]
=======
  exports:[
    RouterModule
  ]
>>>>>>> ce84c7ff68cf0747d9ee435a883a56686be2dbbd
})
export class AuthRoutingModule { }
