import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD
import {HttpClientModule} from '@angular/common/http';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

=======

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
>>>>>>> f1a23122c7b3521d19f249e3564d345d064dbd70

import { AppComponent } from './app.component';
import { bigDealService } from './services/bigDeal.service';
import { ListComponent } from './list/list.component';
import { SingleCarComponent } from './single-car/single-car.component';
import { CarFamilyComponent } from './car-family/car-family.component';



const appRoutes: Routes = [
 
  { path: 'family/:modelFamily', component: CarFamilyComponent},
  { path: 'detail/:modelReference', component: SingleCarComponent},
  { path: '', component: ListComponent }
];
 

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SingleCarComponent,
    CarFamilyComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
<<<<<<< HEAD
    LoadingBarHttpClientModule
=======

   
>>>>>>> f1a23122c7b3521d19f249e3564d345d064dbd70
  ],
  providers: [bigDealService],
  bootstrap: [AppComponent]
})
export class AppModule { }
