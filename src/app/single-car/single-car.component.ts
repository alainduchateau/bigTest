import { Component,Input, OnInit } from '@angular/core';
import { bigDealService } from '../services/bigDeal.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

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

  constructor(private bigDealService:bigDealService,private route: ActivatedRoute) { }

  ngOnInit() {
    //Retrieve data from service
    this.bigDealService.getVehiclesFromServer();

    this.modelReference = this.route.snapshot.params['modelReference'];
    console.log( this.modelReference);
    this.signleCarSubscription = this.bigDealService.vehiclesSubject.subscribe(
      
      (vehicles: any[]) => {
        //Setup the variable to call the result later
        this.car = this.bigDealService.getCarById(this.modelReference);

        this.marketingName = this.bigDealService.getRightModelName(this.bigDealService.dico,this.car.Model);
        console.log(this.marketingName);
      }
    );
  
  }
  
}