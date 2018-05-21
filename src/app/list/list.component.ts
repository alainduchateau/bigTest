import { Component, OnInit } from '@angular/core';
import { bigDealService } from '../services/bigDeal.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listVehicles: any;

  car: any;

  carFamilies: any;

  count: number;

  sortedByFamilies: any;

  vehiclesSubscription: Subscription;

  constructor(private bigDealService: bigDealService) { }

  ngOnInit() {
    this.bigDealService.getVehiclesFromServer();

    this.vehiclesSubscription = this.bigDealService.vehiclesSubject.subscribe(
      (vehicles: any[]) => {
        console.log("chargement terminé");
        this.listVehicles = vehicles;
        this.listyByModels(this.listVehicles);
        this.count = this.listVehicles.length;
      }
    );
  }

  onFetch() {
    this.bigDealService.getVehiclesFromServer();
  }

  listyByModels(carList) {

    var increment = 0;

    carList.forEach(car => {

      var marketingName = this.bigDealService.getRightModelName(this.bigDealService.dico, car.Model);
      if (marketingName) {
        //console.log("originalName :"+car.Model+"------"+marketingName);
        car.marketingName = marketingName;
      }
    }
    );

    this.sortedByFamilies = this.bigDealService.groupBy(this.listVehicles, car => car.marketingName);

    this.carFamilies = Array.from(this.sortedByFamilies.keys());
    console.log(this.carFamilies);
    console.log(this.sortedByFamilies.get("ix20").length);


  }

}

