import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { bigDealService } from './services/bigDeal.service';
import { ListComponent } from './list/list.component';
import { SingleCarComponent } from './single-car/single-car.component';
import { CarFamilyComponent } from './car-family/car-family.component';
 

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SingleCarComponent,
    CarFamilyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [bigDealService],
  bootstrap: [AppComponent]
})
export class AppModule { }
