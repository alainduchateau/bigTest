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
  car: object;
  carFamilies: any[];
  count: number;
  sortedByFamilies: any;
  

  vehiclesSubscription: Subscription;

  constructor(private bigDealService: bigDealService) { 
        //Retrieve data from service
        this.bigDealService.getVehiclesFromServer();
  }

  ngOnInit() {
    //Listen the vechicle subjet, trigger the action after datas are loaded
    this.vehiclesSubscription = this.bigDealService.vehiclesSubject.subscribe(
      (vehicles: any[]) => {
        //Setup the variable to call the result later
        this.listVehicles = vehicles;
        // Group the model by the marketing name
        this.listyByModels(this.listVehicles);
       
      }
    );
  }

 listyByModels(carList) {
    carList = carList.filter(car => car.BigDealPrice < 15000);
    this.sortedByFamilies = this.bigDealService.groupBy(carList, car => car.marketingName);
    //carList.filter(car => car.BigDealPrice < 20000);
    this.carFamilies = Array.from(this.sortedByFamilies.keys());
     // Count the total of vehicles in list
     this.count = carList.length;
   
  }

  sumByModel(selectedModel){
    return(this.sortedByFamilies.get(selectedModel).length);
  }

  selectCarType(param){
    console.log("selectCarType "+param);
  }
  

}

