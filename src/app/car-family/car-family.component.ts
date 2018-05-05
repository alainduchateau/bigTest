import { Component, OnInit } from '@angular/core';
import { bigDealService } from '../services/bigDeal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-family',
  templateUrl: './car-family.component.html',
  styleUrls: ['./car-family.component.scss']
})
export class CarFamilyComponent implements OnInit {

  modelFamily:string;
  modelFamilyList : any;
  
  constructor(private bigDealService:bigDealService, private route: ActivatedRoute) { }

  ngOnInit() {
    //Retrieve model family for the current url
    this.modelFamily = this.route.snapshot.params['modelFamily'];

    //Download family list for bigDeal service
    this.modelFamilyList = this.bigDealService.getCarByModel(this.modelFamily); 

  }

}
