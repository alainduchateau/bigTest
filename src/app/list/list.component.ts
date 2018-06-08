import { Component, OnInit } from '@angular/core';
import { bigDealService } from '../services/bigDeal.service';
import { Subscription } from 'rxjs';
import { filteringService } from "../services/filtering.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listVehicles: any[];
  referencVehiclesList:any[];
  car: object;
  carFamilies: any[];
  count: number;
  sortedByFamilies: any;
  price:number = 35000;
  booleanValue: boolean = true;
  fuelType:string
  displayModel:number;
  carType:string;

  vehiclesSubscription: Subscription;

  constructor(private bigDealService: bigDealService, private filteringService:filteringService) { 
        //Retrieve data from service
        this.bigDealService.getVehiclesFromServer();
  }

  ngOnInit() {
    //Listen the vechicle subjet, trigger the action after datas are loaded
    this.vehiclesSubscription = this.bigDealService.vehiclesSubject.subscribe(
      (vehicles: any[]) => {
        this.referencVehiclesList = vehicles;
        //Setup the variable to call the result later
        this.listVehicles = vehicles;
        // Group the model by the marketing name
        this.listyByModels(this.listVehicles);
        
        this.setFuelType("essence");
      }
    );
  }

setFuelType(param){
  this.filteringService.setFuelType(param);
}



 listyByModels(carList) {
    //carList = carList.filter(car => !car.FirstImmatDate);
    this.sortedByFamilies = this.bigDealService.groupBy(carList, car => car.marketingName);
    //carList.filter(car => car.BigDealPrice < 20000);
    this.carFamilies = Array.from(this.sortedByFamilies.keys());
     // Count the total of vehicles in list
     this.count = carList.length;
     //console.log(carList);

   
  }

  sumByModel(selectedModel){
    //console.log(selectedModel);
    return(selectedModel.value.length);
  }


/**
 * Filter the list by car type
 *
 * @param {string} param => type of car : secondHand, new
 * @memberof ListComponent
 */
selectCarType(param:string){

  var output:string;
  
  switch(param) {
    case "secondHand":
        output = "secondHand";
        break;
    case "new":
        output = "New";
        break;
    default:
        output = "All";
  }
  this.carType=output;
  return output;
}
/**
 *Filter by bigDeal price
 *
 * @param {number} param => maximum price for the car
 * @memberof ListComponent
 */
priceFilter(param:number){
  this.listVehicles = this.referencVehiclesList.filter(car => car.BigDealPrice <= param);
   this.listyByModels(this.listVehicles)
}
OrderFilter="BigDealPrice";
}

