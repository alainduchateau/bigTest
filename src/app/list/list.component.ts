import { Component, OnInit } from '@angular/core';
import { bigDealService } from '../services/bigDeal.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listVehicles:any;

  car: any;

  carFamily: any;

  constructor(private bigDealService : bigDealService) { }

  ngOnInit() {
    this.listVehicles = this.bigDealService.vehicles;
    this.listyByModels(this.listVehicles);
  }

  listyByModels(carList){

    this.carFamily = [];

    carList.forEach(car => {

          var found = this.carFamily.find(function(element) {
            return element === car.Model;
          });

        if(found){

        } else {  
          this.carFamily.push(car.Model);
        }
      }
    );
    console.log(this.carFamily);
  }


}

