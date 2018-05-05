import { Component, OnInit } from '@angular/core';
import { bigDealService } from '../services/bigDeal.service';

@Component({
  selector: 'app-car-family',
  templateUrl: './car-family.component.html',
  styleUrls: ['./car-family.component.scss']
})
export class CarFamilyComponent implements OnInit {

  modelFamily:string = "i30 5d V7a";

  constructor(private bigDealService:bigDealService) { }

  modelFamilyList : any;

  ngOnInit() {

    this.modelFamilyList = this.bigDealService.getCarByModel(this.modelFamily); 

    console.log(this.modelFamily);

  }

}
