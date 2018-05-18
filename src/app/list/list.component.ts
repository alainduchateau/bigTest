import { Component, OnInit } from '@angular/core';
import { bigDealService } from '../services/bigDeal.service';
import { Subscription } from 'rxjs/Subscription';


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

  vehiclesSubscription: Subscription;  

  constructor(private bigDealService : bigDealService) { }

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

 onFetch(){
   this.bigDealService.getVehiclesFromServer();
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
          var displayName = this.bigDealService.getRightModelName(this.bigDealService.dico, car.Model); 
          currentCarFamily.numberOfCar++;
          currentCarFamily.carFamilyDisplayName = displayName;
         } else {  
          var displayName = this.bigDealService.getRightModelName(this.bigDealService.dico, car.Model);
          var carFamily = {"Name":car.Model,"numberOfCar":1,"carFamilyDisplayName":displayName}
          this.carFamilies.push(carFamily);
        }
      }
    );
   
  }

}

