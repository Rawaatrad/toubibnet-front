import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { PharmaciesModule } from './modules/pharmacies/pharmacies.module';

import { AdminModule } from './modules/admin/admin.module';
import { HomeModule } from './modules/home/home.module';
import '@angular/compiler'
//import { AppointementsModule } from './modules/appointment/appointment.module'
import { ArticlesModule } from './modules/articles/articles.module';
import { ClientsModule } from './modules/clients/clients.module';
import { MedicinesModule } from './modules/medicines/medicines.module';
import { QuestionsModule } from './modules/questions/questions.module';
import { SharedModule } from './modules/shared/shared.module';

import { InputTextModule } from 'primeng-lts/inputtext';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    //AppointementsModule,
    ArticlesModule,
    MedicinesModule,
    QuestionsModule,
    SharedModule,
    InputTextModule,
    AdminModule,
    ClientsModule,

    PharmaciesModule,


    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
