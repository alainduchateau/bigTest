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

  carFamilies: any;

  count : number;

  constructor(private bigDealService : bigDealService) { }

  ngOnInit() {
    this.listVehicles = this.bigDealService.vehicles;
    this.listyByModels(this.listVehicles);
    this.count = this.listVehicles.length;
  }

  listyByModels(carList){

    this.carFamilies = [];

    carList.forEach(car => {

          var found = this.carFamilies.find(function(element) {
            return element.Name === car.Model;
          });

        if(found){
          var currentCarFamily =  this.carFamilies.filter(function(item) {
            return item.Name === car.Model;
          })[0]; 
          currentCarFamily.numberOfCar++;
         } else {  
          var carFamily = {"Name":car.Model,"numberOfCar":1}
          this.carFamilies.push(carFamily);
        }
      }
    );
   
  }

}

