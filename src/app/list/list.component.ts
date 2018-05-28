import { Component, OnInit } from '@angular/core';
import { bigDealService } from '../services/bigDeal.service';
<<<<<<< HEAD
import { LoadingBarService } from '@ngx-loading-bar/core';
import { Subscription } from 'rxjs';

=======
import { Subscription } from 'rxjs/Subscription';
>>>>>>> parent of f14fb63... loading bar test


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

<<<<<<< HEAD

  constructor(private bigDealService: bigDealService,private loadingBar: LoadingBarService) { }
=======
  constructor(private bigDealService: bigDealService) { }
>>>>>>> parent of f14fb63... loading bar test




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

}

