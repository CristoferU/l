import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
=======

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
>>>>>>> ce84c7ff68cf0747d9ee435a883a56686be2dbbd

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
<<<<<<< HEAD
        SharedModule,
        AppRoutingModule,
        PagesModule,
        HttpClientModule
=======
        AppRoutingModule,
        PagesModule
>>>>>>> ce84c7ff68cf0747d9ee435a883a56686be2dbbd
    ]
})
export class AppModule { }
