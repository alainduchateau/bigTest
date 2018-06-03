import { Component, OnInit } from '@angular/core';
import { bigDealService } from '../services/bigDeal.service';
import { Subscription } from 'rxjs';



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
  

  vehiclesSubscription: Subscription;

  constructor(private bigDealService: bigDealService) { 
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
       
      }
    );
  }

 listyByModels(carList) {
    //carList = carList.filter(car => !car.FirstImmatDate);
    this.sortedByFamilies = this.bigDealService.groupBy(carList, car => car.marketingName);
    //carList.filter(car => car.BigDealPrice < 20000);
    this.carFamilies = Array.from(this.sortedByFamilies.keys());
     // Count the total of vehicles in list
     this.count = carList.length;
     console.log(carList);

   
  }

  sumByModel(selectedModel){
    return(this.sortedByFamilies.get(selectedModel).length);
  }
/**
 * Filter the list by fuel type
 *
 * @param {string} param => type fuel : diesle, benzine
 * @memberof ListComponent
 */
selectFuelType(param:string){
    switch(param) {
      case "diesel":
          this.listVehicles = this.referencVehiclesList.filter(car => car.FuelCode === "diesel");
          break;
      case "gasoline":
          this.listVehicles = this.referencVehiclesList.filter(car => car.FuelCode === "gasoline");
          break;
      default:
          this.listVehicles = this.referencVehiclesList;
  }
  this.count = this.listVehicles.length;
    
  console.log("selectCarType "+param);
  }

/**
 * Filter the list by car type
 *
 * @param {string} param => type of car : secondHand, new
 * @memberof ListComponent
 */
selectCarType(param:string){
  switch(param) {
    case "secondHand":
        this.listVehicles = this.referencVehiclesList.filter(car => car.FirstImmatDate);
        break;
    case "new":
        this.listVehicles = this.referencVehiclesList.filter(car => !car.FirstImmatDate);
        break;
    default:
        this.listVehicles = this.referencVehiclesList;
  }
this.count = this.listVehicles.length;

}

priceFilter(param:number){
  console.log(param);
}
  

}

