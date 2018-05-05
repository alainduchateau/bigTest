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

  constructor(private bigDealService : bigDealService) { }

  ngOnInit() {
    this.listVehicles = this.bigDealService.vehicles;
    this.listyByModels(this.listVehicles);
  }

  listyByModels(carList){

    this.carFamilies = [];

    carList.forEach(car => {

          var found = this.carFamilies.find(function(element) {
            return element.Name === car.Model;
          });

        if(found){
          console.log("trouvé");
        } else {  
          var carFamily = {"Name":car.Model,"Fuel":21}
          this.carFamilies.push(carFamily); console.log(this.carFamilies);
        }
      }
    );
   
  }

}

