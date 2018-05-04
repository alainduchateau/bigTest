import { Component, OnInit } from '@angular/core';
import { bigDealService } from '../services/bigDeal.service';

@Component({
  selector: 'app-single-car',
  templateUrl: './single-car.component.html',
  styleUrls: ['./single-car.component.scss']
})
export class SingleCarComponent implements OnInit {

  car : any;

  modelFamily:any;

  constructor(private bigDealService:bigDealService) { }

  ngOnInit() {

    this.car = this.bigDealService.getCarById('TMAH3517AJJ053967');

    this.modelFamily = this.bigDealService.getCarByModel("i30 5d V7a");
    console.log(this.modelFamily);

  }

}
