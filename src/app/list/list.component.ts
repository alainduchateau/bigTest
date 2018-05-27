import { Component, OnInit } from '@angular/core';
import { bigDealService } from '../services/bigDeal.service';
<<<<<<< HEAD
import { Subscription } from 'rxjs/Subscription';
import { LoadingBarService } from '@ngx-loading-bar/core';

=======
import { Subscription } from 'rxjs';
>>>>>>> f1a23122c7b3521d19f249e3564d345d064dbd70


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
 
})
export class ListComponent implements OnInit {

  listVehicles: any[];
  car: object;
  carFamilies: any[];
  count: number;
  sortedByFamilies: any;

  vehiclesSubscription: Subscription;

<<<<<<< HEAD
  constructor(private bigDealService: bigDealService,private loadingBar: LoadingBarService) { }
=======
  constructor(private bigDealService: bigDealService) { 
        //Retrieve data from service
        this.bigDealService.getVehiclesFromServer();
  }
>>>>>>> f1a23122c7b3521d19f249e3564d345d064dbd70

  ngOnInit() {
    //Listen the vechicle subjet, trigger the action after datas are loaded
    this.vehiclesSubscription = this.bigDealService.vehiclesSubject.subscribe(
      (vehicles: any[]) => {
        //Setup the variable to call the result later
        this.listVehicles = vehicles;
        // Group the model by the marketing name
        this.listyByModels(this.listVehicles);
        // Count the total of vehicles in list
        this.count = this.listVehicles.length;
      }
    );
  }

 listyByModels(carList) {
    this.sortedByFamilies = this.bigDealService.groupBy(this.listVehicles, car => car.marketingName);
    this.carFamilies = Array.from(this.sortedByFamilies.keys());
  }

  sumByModel(selectedModel){
    return(this.sortedByFamilies.get(selectedModel).length);
  }

}

