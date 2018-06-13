import { Component,Input, OnInit } from '@angular/core';
import { bigDealService } from '../services/bigDeal.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-single-car',
  templateUrl: './single-car.component.html',
  styleUrls: ['./single-car.component.scss']
})
export class SingleCarComponent implements OnInit {

  car : any;

  modelReference: string ;

  signleCarSubscription: Subscription;

  marketingName:string;

  constructor(private bigDealService:bigDealService,private route: ActivatedRoute) {
    //Retrieve data from service
    this.bigDealService.getVehiclesFromServer();
  }

  ngOnInit() {
    //Retrieve model reference from route
    this.modelReference = this.route.snapshot.params['modelReference'];
    //Liste the http loader
    this.signleCarSubscription = this.bigDealService.vehiclesSubject.subscribe(
      (vehicles: any[]) => {
        var temp;
        //Setup the variable to call the result later
        this.car = this.bigDealService.getCarById(this.modelReference);
        //Find the marketing name of this car
        temp = this.bigDealService.getRightModelName(this.bigDealService.dico,this.car.Model);
        
        this.marketingName = temp[0];
      }
    );
  
  }
  
}