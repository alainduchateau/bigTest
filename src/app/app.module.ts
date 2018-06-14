import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { HttpClientModule } from '@angular/common/http';
import { OrderModule } from 'ngx-order-pipe';

import { AppComponent } from './app.component';
import { bigDealService } from './services/bigDeal.service';
import { filteringService } from './services/filtering.service';
import { ListComponent } from './list/list.component';
import { SingleCarComponent } from './single-car/single-car.component';
import { CarFamilyComponent } from './car-family/car-family.component';
import { QuestionableBooleanPipe } from './pipes/questionableBoolean.pipe';
import { GroupByPipe } from './pipes/groupBy.pipe';
import { sortByFuelPipe } from './pipes/sortByFuel.pipe';
import { sortByCarTypePipe } from './pipes/sortByCarType.pipe';
import { filterByPricePipe} from './pipes/filterByPrice.pipe';


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
    QuestionableBooleanPipe,
    GroupByPipe,
    sortByFuelPipe,
    sortByCarTypePipe,
    filterByPricePipe
    
  ],
  imports: [
    BrowserModule,
    OrderModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpModule,
       
  ],
  providers: [bigDealService,filteringService],
  bootstrap: [AppComponent]
})
export class AppModule { }
