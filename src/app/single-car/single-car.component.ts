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

  modelReference: string;

  signleCarSubscription: Subscription;


  constructor(private bigDealService:bigDealService,private route: ActivatedRoute) { }

  ngOnInit() {
    //this.car = this.bigDealService.getCarById(this.modelReference);
    this.bigDealService.getVehiclesFromServer();

    this.signleCarSubscription = this.bigDealService.vehiclesSubject.subscribe(
      (vehicles: any[]) => {
        console.log("chargement family terminé");
        // Retrieve model family for the current url
        this.modelReference = this.route.snapshot.params['modelReference'];
        this.car = this.bigDealService.getCarById(this.modelReference);
      }
    );
      console.log(this.car);
  }

}
