import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { bigDealService } from './services/bigDeal.service';
import { ListComponent } from './list/list.component';
 

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [bigDealService],
  bootstrap: [AppComponent]
})
export class AppModule { }
