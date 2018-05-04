import { Component, OnInit } from '@angular/core';
import { bigDealService } from '../services/bigDeal.service';

@Component({
  selector: 'app-car-family',
  templateUrl: './car-family.component.html',
  styleUrls: ['./car-family.component.scss']
})
export class CarFamilyComponent implements OnInit {

  constructor(private bigDealService:bigDealService) { }

  modelFamily : any;

  ngOnInit() {

    this.modelFamily = this.bigDealService.getCarByModel("i30 5d V7a"); 

    console.log(this.modelFamily);

  }

}
