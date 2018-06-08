import { Component, OnInit } from '@angular/core';
import { bigDealService } from '../services/bigDeal.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { filteringService } from "../services/filtering.service";

@Component({
  selector: 'app-car-family',
  templateUrl: './car-family.component.html',
  styleUrls: ['./car-family.component.scss']
})
export class CarFamilyComponent implements OnInit {

  modelFamilyArray: string;
  modelFamilyList: any;
  count: number;
  fuelDiesel: string;
  fuelGasoline: string;
  carFuel: string;
  listVehicles:any;
  selectedFamily:any;

  fuelType:string;

  familySubscription: Subscription;

  constructor(private bigDealService: bigDealService, private route: ActivatedRoute, private filteringService:filteringService) {
    this.bigDealService.getVehiclesFromServer();
  }

  ngOnInit() {
    //Capture of the family name in the URL
    this.selectedFamily = this.route.snapshot.params['modelFamily'];
    //Listening of the request
    this.familySubscription = this.bigDealService.vehiclesSubject.subscribe(
      (vehicles: any[]) => {
        //Setup the variable to call the result later
        this.listVehicles = vehicles;
        //Create map with filtered array by marketing name of each model
        this.modelFamilyList = this.bigDealService.groupBy(this.listVehicles, car => car.marketingName); 
        //Create the array by the selected family
        this.modelFamilyArray = this.modelFamilyList.get(this.selectedFamily);
        //Count family membre
        this.count = this.modelFamilyArray.length;

        this.fuelType = localStorage.getItem("fuelType");
      }
    );
  }
  

}
