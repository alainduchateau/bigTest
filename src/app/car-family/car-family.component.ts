import { Component, OnInit } from '@angular/core';
import { bigDealService } from '../services/bigDeal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-family',
  templateUrl: './car-family.component.html',
  styleUrls: ['./car-family.component.scss']
})
export class CarFamilyComponent implements OnInit {

  modelFamily: string;
  modelFamilyList: any;
  count: number;
  fuelDiesel: string;
  fuelGasoline: string;
  carFuel: string;

  constructor(private bigDealServ: bigDealService, private route: ActivatedRoute) { }

  ngOnInit() {
    // Retrieve model family for the current url
    this.modelFamily = this.route.snapshot.params['modelFamily'];

    // Download family list for bigDeal service
    this.modelFamilyList = this.bigDealServ.getCarByModel(this.modelFamily);

    this.count = this.modelFamilyList.length;

    this.fuelDiesel = this.modelFamilyList.filter(car  => car.FuelCode === 'diesel');
    this.fuelGasoline  = this.modelFamilyList.filter(car  => car.FuelCode === 'gasoline');

  }

}
